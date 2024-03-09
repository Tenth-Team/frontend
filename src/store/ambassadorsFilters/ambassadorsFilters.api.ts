import { createAsyncThunk } from "@reduxjs/toolkit"
// import type { AmbassadorsRoot } from "./types"
import axiosInstance from "../../api/axiosInstance"
import type { AmbassadorsFiltersRequest } from "./types"

export const getAmbassadorsFilters = createAsyncThunk<
  AmbassadorsFiltersRequest,
  void,
  { rejectValue: unknown }
>("filters/getAmbassadorsFilters", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get("/api/v1/ambassadors/filters")
    return response.data
  } catch (err) {
    return rejectWithValue(err)
  }
})
