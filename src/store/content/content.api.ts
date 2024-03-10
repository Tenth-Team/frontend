import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../../api/axiosInstance"
import type { ContentStatus, СontentRequest, СontentType } from "./type"

export const getСontent = createAsyncThunk<
  СontentType[],
  void,
  { rejectValue: unknown }
>("content/getСontent", async (_, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.get("/api/v1/content/")
    return res.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

// export const getСontent = createAsyncThunk<
//   СontentType[],
//   { params?: { search?: string } },
//   { rejectValue: unknown }
// >("content/getСontent", async ({ params }, { rejectWithValue }) => {
//   try {
//     const res = await axiosInstance.get("/api/v1/content/", { params })
//     return res.data
//   } catch (err) {
//     return rejectWithValue(err)
//   }
// })

export const postСontent = createAsyncThunk<
  СontentType,
  { data: СontentRequest },
  { rejectValue: unknown }
>("content/postСontent", async ({ data }, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.post("/api/v1/content/", data)
    return res.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const getСontentByID = createAsyncThunk<
  СontentType,
  { id: number },
  { rejectValue: unknown }
>("content/getСontentByID", async ({ id }, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.get(`/api/v1/content/${id}`)
    return res.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const patchСontentByID = createAsyncThunk<
  СontentType,
  { id: number; data: ContentStatus },
  { rejectValue: unknown }
>("content/patchСontentByID", async ({ id, data }, { rejectWithValue }) => {
  try {
    const res = await axiosInstance.patch(`/api/v1/content/${id}`, data)
    return res.data
  } catch (err) {
    return rejectWithValue(err)
  }
})
