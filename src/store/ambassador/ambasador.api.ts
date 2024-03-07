import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../../api/axiosInstance"
import type { AmbassadorRequest, AmbassadorRoot } from "./types"

export const getAmbassador = createAsyncThunk<
  AmbassadorRoot,
  { id: string | number },
  { rejectValue: {} | unknown }
>("ambassador/getAmbassador", async ({ id }, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(`/api/v1/ambassadors/${id}`)
    return response.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const patchAmbassador = createAsyncThunk<
  AmbassadorRoot,
  { id: string | number; data: Partial<AmbassadorRequest> },
  { rejectValue: {} | unknown }
>("ambassador/patchAmbassador", async ({ id, data }, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.patch(
      `/api/v1/ambassadors/${id}`,
      data,
    )
    return response.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const deleteAmbassador = createAsyncThunk<
  void,
  { id: string | number },
  { rejectValue: {} | unknown }
>("ambassador/deleteAmbassador", async ({ id }, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.patch(`/api/v1/ambassadors/${id}`)
    return response.data
  } catch (err) {
    return rejectWithValue(err)
  }
})
