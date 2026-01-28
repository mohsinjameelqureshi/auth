import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:8001" : "/";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axiosInstance.post("/auth/signup", {
        email,
        password,
        name,
      });
      set({ user: res.data.data, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({
        error: error.response.data.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },

  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axiosInstance.post("/auth/verify-email", { code });
      set({ user: res.data.data, isAuthenticated: true, isLoading: false });
      return res.data;
    } catch (error) {
      set({
        error: error.response.data.message || "Error verifying email",
        isLoading: false,
      });
      throw error;
    }
  },
  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const res = await axiosInstance.get("/auth/check-auth");
      set({
        user: res.data.data,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch (error) {
      set({ error: null, isCheckingAuth: false, isAuthenticated: false });
    }
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axiosInstance.post("/auth/login", { email, password });
      set({
        isAuthenticated: true,
        user: res.data.data,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axiosInstance.post("/auth/logout");
      set({
        user: null,
        isAuthenticated: false,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      set({ error: "Error logging out", isLoading: fasle });
      throw error;
    }
  },
}));
