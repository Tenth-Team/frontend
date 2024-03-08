import { createAsyncThunk } from "@reduxjs/toolkit"
import type { AuthToken, LoginData } from "../../@types/api"
import axiosInstance from "../../api/axiosInstance"

export const login = createAsyncThunk<
  AuthToken,
  LoginData,
  { rejectValue: unknown }
>("auth/login", async (userData, { rejectWithValue }) => {
  try {
    console.log(userData)
    const res = await axiosInstance.post("/api/v1/auth/token/login/", userData)
    return res.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const logout = createAsyncThunk<
  void,
  void,
  { rejectValue: unknown }
>("auth/logout", async (_, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.post("/api/v1/auth/token/logout/")
    return res.data
  } catch (err) {
    return rejectWithValue(err)
  }
})
