import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { getAmbassadors } from "./ambassadors.api"
import { setError, setPending } from "../utils"
import type { AmbassadorsRequest } from "./types"
import type { TypeRequest } from "../types"

type TypeInitialState = AmbassadorsRequest & TypeRequest

const initialState: TypeInitialState = {
  count: 0,
  next: "",
  previous: "",
  results: [],
  loading: false,
  error: null,
}

const ambassadorsSlice = createSlice({
  name: "ambassadors",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAmbassadors.fulfilled, (state, action) => {
        state.count = action.payload.count
        state.next = action.payload.next
        state.previous = action.payload.previous
        state.results = action.payload.results
        state.loading = false
        state.error = null
      })
      .addMatcher(isAnyOf(getAmbassadors.pending), setPending)
      .addMatcher(isAnyOf(getAmbassadors.rejected), setError)
  },
})

export default ambassadorsSlice.reducer
