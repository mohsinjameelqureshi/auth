import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { generateVerificationCode } from "../utils/generateVerificationCode.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail } from "../services/email.service.js";

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

    // console.log(process.env.MAILTRAP_API_TOKEN);

    // jwt
    generateTokenAndSetCookie(res, createdUser?._id);

    // send mails
    await sendVerificationEmail(createdUser.email, verificationToken);
    return res
      .status(201)
      .json(new ApiResponse(201, createdUser, "User created successfully"));
  } catch (error) {
    console.log("User creation failed", error);
  }
});

export { signup };
