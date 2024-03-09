import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { setError, setPending } from "../utils"
import type { TypeRequest } from "../types"
import type { Promocode } from "./type"
import {
  deletePromocodeByID,
  getPromocodeByID,
  getPromocodes,
  patchPromocodeByID,
  postPromocodes,
  putPromocodeByID,
} from "./promocodes.api"

type TypeInitialState = TypeRequest & {
  promocodesList: Promocode[]
  currentPromocode: Promocode
}

const initialState: TypeInitialState = {
  promocodesList: [],
  currentPromocode: {
    id: 0,
    status: "",
    name: "",
    ambassador: 0,
  },
  loading: false,
  error: null,
}

const promocodesSlice = createSlice({
  name: "promocodes",
  initialState,
  reducers: {
    deletePromocode: (state, actions) => {
      state.promocodesList.filter(item => item.id !== actions.payload)
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPromocodes.fulfilled, (state, action) => {
        state.promocodesList = action.payload
        state.loading = false
        state.error = null
        console.log(action.payload)
      })
      .addCase(postPromocodes.fulfilled, (state, action) => {
        state.currentPromocode = action.payload
        state.loading = false
        state.error = null
        state.promocodesList = [...state.promocodesList, action.payload]
        console.log(action.payload)
      })
      .addCase(getPromocodeByID.fulfilled, (state, action) => {
        state.currentPromocode = action.payload
        state.loading = false
        state.error = null
        console.log(action.payload)
      })

      .addCase(deletePromocodeByID.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        console.log(action.payload)
      })
      .addMatcher(
        isAnyOf(putPromocodeByID.fulfilled, patchPromocodeByID.fulfilled),
        (state, action) => {
          const updatedPromocode = action.payload
          const index = state.promocodesList.findIndex(
            promocode => promocode.id === updatedPromocode.id,
          )
          if (index !== -1) {
            state.promocodesList[index] = updatedPromocode
          }
          state.loading = false
          state.error = null
          console.log(action.payload)
        },
      )
      .addMatcher(
        isAnyOf(
          getPromocodes.pending,
          postPromocodes.pending,
          getPromocodeByID.pending,
          putPromocodeByID.pending,
          patchPromocodeByID.pending,
          deletePromocodeByID.pending,
        ),
        setPending,
      )
      .addMatcher(
        isAnyOf(
          getPromocodes.rejected,
          postPromocodes.rejected,
          getPromocodeByID.rejected,
          putPromocodeByID.rejected,
          patchPromocodeByID.rejected,
          deletePromocodeByID.rejected,
        ),
        setError,
      )
  },
})
export const { deletePromocode } = promocodesSlice.actions
export default promocodesSlice.reducer
