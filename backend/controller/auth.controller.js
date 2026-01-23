import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { generateVerificationCode } from "../utils/generateVerificationCode.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import {
  sendVerificationEmail,
  sendWelcomeEmail,
} from "../services/email.service.js";

const signup = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;
  if ([email, password, name].some((field) => !field || field.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }
  const userAlreadyExist = await User.findOne({ email });

  if (userAlreadyExist) {
    throw new ApiError(409, "User already exist with same email");
  }
  const verificationToken = generateVerificationCode();
  try {
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
      throw new ApiError(500, "Something went wrong while creating user");
    }

    // jwt
    generateTokenAndSetCookie(res, createdUser?._id);

    // send mails
    await sendVerificationEmail(
      createdUser.email,
      verificationToken,
      createdUser.name
    );
    return res
      .status(201)
      .json(new ApiResponse(201, createdUser, "User created successfully"));
  } catch (error) {
    console.log("User creation failed", error);
  }
});

const verifyEmail = asyncHandler(async (req, res) => {
  // - - - - - -
  const { code } = req.body;
  if (!code) {
    throw new ApiError(400, "Verification code is required");
  }

  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    }).select("-password");

    if (!user) {
      throw new ApiError(400, "Invalid or expired verification code");
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save();

    await sendWelcomeEmail(user.email, user.name);

    res
      .status(200)
      .json(new ApiResponse(200, user, "User verified successfully"));
  } catch (error) {
    console.log("Something went wrong while verifying user");
  }
});

const logout = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  res.status(200).json(new ApiResponse(200, "Looged out successfully"));
});

const login = asyncHandler(async (req, res) => {
  let { email = "", password = "" } = req.body;
  email = email.trim().toLowerCase();
  password = password.trim();

  // validation
  if ([email, password].some((field) => !field || field.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  // check if user exists
  const user = await User.findOne({ email });

  if (!user || !(await user.isPasswordCorrect(password))) {
    throw new ApiError(401, "Invalid credentials");
  }

  generateTokenAndSetCookie(res, user._id);

  user.lastLogin = new Date();
  await user.save();

  res
    .status(200)
    .json(new ApiResponse(200, user, "User logged in successfully"));
});
export { signup, verifyEmail, logout, login };
