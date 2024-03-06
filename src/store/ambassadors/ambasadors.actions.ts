import { createAsyncThunk } from "@reduxjs/toolkit"
import type { AmbassadorsRoot } from "./types"
import { api } from "../../utils/Api"

// думаю на RTK переписать
export const getAmbassadors = createAsyncThunk<
  AmbassadorsRoot,
  string | undefined,
  { rejectValue: {} | unknown }
>("ambassadors/getAmbassadors", async (_, { rejectWithValue }) => {
  try {
    const res = await api.getAmbassadors()
    return res
  } catch (err) {
    return rejectWithValue(err)
  }
})
