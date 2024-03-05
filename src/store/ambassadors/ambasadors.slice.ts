import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { getAmbassadors } from "./ambasadors.actions"
import { setError, setPending } from "../utils"
import type { AmbassadorsRoot } from "./types"
import type { TypeRequest } from "../types"

const initialState: AmbassadorsRoot & TypeRequest = {
  count: 0,
  next: "",
  previous: "",
  results: [],
  loading: false,
  error: null,
}

const commentsSlice = createSlice({
  name: "ambassadors",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAmbassadors.fulfilled, (state, action) => {
        state = { ...action.payload, loading: false, error: null }
        console.log(action.payload)
      })

      .addMatcher(isAnyOf(getAmbassadors.pending), setPending)
      .addMatcher(isAnyOf(getAmbassadors.rejected), setError)
  },
})

export default commentsSlice.reducer
