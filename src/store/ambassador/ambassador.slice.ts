import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import {
  deleteAmbassador,
  getAmbassador,
  patchAmbassador,
} from "./ambassador.api"
import { setError, setPending } from "../utils"
import type { TypeRequest } from "../types"
import type { AmbassadorRoot } from "./types"

type TypeInitialState = TypeRequest & {
  ambassadorCard: AmbassadorRoot & Record<string, {}>
}

const initialState: TypeInitialState = {
  ambassadorCard: {
    id: 0,
    ya_edu: { id: 0, name: "" },
    amb_goals: [],
    promo_code: [],
    full_name: "",
    gender: "",
    address: "",
    postal_code: "",
    email: "",
    phone_number: "",
    telegram: "",
    edu: "",
    work: "",
    study_goal: "",
    blog_url: "",
    clothing_size: "",
    shoe_size: "",
    additional_comments: "",
    status: "",
    reg_date: "",
    country: "",
    city: "",
    content_count: 0,
  },
  loading: false,
  error: null,
}

const ambassadorSlice = createSlice({
  name: "ambassador",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAmbassador.fulfilled, (state, action) => {
        state.ambassadorCard = {
          ...action.payload,
          reg_date: action.payload.reg_date.slice(0, 16),
        }
        state.loading = false
        state.error = null
      })
      .addCase(patchAmbassador.fulfilled, (state, action) => {
        state.ambassadorCard = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(deleteAmbassador.fulfilled, (state, action) => {
        // сбрасываем стейт
        Object.assign(state, initialState)
      })
      .addMatcher(
        isAnyOf(
          getAmbassador.pending,
          patchAmbassador.pending,
          deleteAmbassador.pending,
        ),
        setPending,
      )
      .addMatcher(
        isAnyOf(
          getAmbassador.rejected,
          patchAmbassador.rejected,
          deleteAmbassador.rejected,
        ),
        setError,
      )
  },
})

export default ambassadorSlice.reducer
