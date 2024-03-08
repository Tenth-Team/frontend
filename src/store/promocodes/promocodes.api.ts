import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../../api/axiosInstance"
import type { Promocode, PromocodeRequest } from "./type"
import { deletePromocode } from "./promocodes.slice"

export const getPromocodes = createAsyncThunk<
  Promocode[],
  void,
  { rejectValue: unknown }
>("promocodes/getPromocodes", async (_, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.get("/api/v1/promocodes/")
    return res.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const postPromocodes = createAsyncThunk<
  Promocode,
  { data: PromocodeRequest },
  { rejectValue: unknown }
>("promocodes/postPromocodes", async ({ data }, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.post("/api/v1/promocodes/", data)
    return res.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const getPromocodeByID = createAsyncThunk<
  Promocode,
  { id: number },
  { rejectValue: unknown }
>("promocodes/getPromocodeByID", async ({ id }, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.get(`/api/v1/promocodes/${id}`)
    return res.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const putPromocodeByID = createAsyncThunk<
  Promocode,
  { id: number; data: PromocodeRequest },
  { rejectValue: unknown }
>("promocodes/putPromocodeByID", async ({ id, data }, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.put(`/api/v1/promocodes/${id}`, data)
    return res.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const patchPromocodeByID = createAsyncThunk<
  Promocode,
  { id: number; data: Partial<PromocodeRequest> },
  { rejectValue: unknown }
>(
  "promocodes/patchPromocodeByID",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.patch(`/api/v1/promocodes/${id}`, data)
      return res.data
    } catch (err) {
      return rejectWithValue(err)
    }
  },
)

export const deletePromocodeByID = createAsyncThunk<
  void,
  { id: number },
  { rejectValue: unknown }
>(
  "promocodes/deletePromocodeByID",
  async ({ id }, { rejectWithValue, dispatch }) => {
    try {
      const res = await axiosInstance.delete(`/api/v1/promocodes/${id}`)
      dispatch(deletePromocode(id))
      return res.data
    } catch (err) {
      return rejectWithValue(err)
    }
  },
)
