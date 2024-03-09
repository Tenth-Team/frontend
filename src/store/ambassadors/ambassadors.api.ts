import { createAsyncThunk } from "@reduxjs/toolkit"
import type { AmbassadorsRequest } from "./types"
import axiosInstance from "../../api/axiosInstance"

export const getAmbassadors = createAsyncThunk<
  AmbassadorsRequest,
  void,
  { rejectValue: unknown }
>("ambassadors/getAmbassadors", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get("/api/v1/ambassadors/")
    return response.data
  } catch (err) {
    return rejectWithValue(err)
  }
})
