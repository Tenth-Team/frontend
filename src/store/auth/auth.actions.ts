import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../../utils/Api"
import type { AuthToken, LoginData } from "../../@types/api"

export const login = createAsyncThunk<
  AuthToken,
  LoginData,
  { rejectValue: any }
>("auth/login", async (data, { rejectWithValue }) => {
  try {
    console.log(data)
    return await api.login(data)
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const logout = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: any }
>("auth/logout", async (_, { rejectWithValue }) => {
  try {
    return await api.logout()
  } catch (err) {
    return rejectWithValue(err)
  }
})
