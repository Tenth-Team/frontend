import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import type { TypeRequest } from "../types"
import { getAmbassadorsFilters } from "./ambassadorsFilters.api"
import { setError, setPending } from "../utils"
import {} from "../ambassadors/types"
import type { AmbassadorsFiltersRequest, AmbassadorsInputs } from "./types"

type TypeInitialState = TypeRequest & {
  ambassadorsFilters: AmbassadorsFiltersRequest
  inputs: AmbassadorsInputs
}

const initialState: TypeInitialState = {
  ambassadorsFilters: {
    ya_edu: {
      name: "Программа обучения",
      values: [],
    },
    country: {
      name: "Страна",
      values: [],
    },
    city: {
      name: "Город",
      values: [],
    },
    status: {
      name: "Статус амбассадора",
      values: [],
    },
    gender: {
      name: "Пол",
      values: [],
    },
    order: {
      name: "Сортировать",
      values: [],
    },
  },
  loading: false,
  error: null,
  inputs: {
    search: null,
    ya_edu: [],
    country: [],
    city: [],
    status: [],
    gender: null,
    order: null,
  },
}

const ambassadorsFiltersSlice = createSlice({
  name: "ambassadorsFilters",
  initialState,
  reducers: {
    setSearch(state, action) {
      // Удалить консоль
      console.log(action.payload)
      state.inputs.search = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAmbassadorsFilters.fulfilled, (state, action) => {
        // Удалить консоль
        console.log(action.payload)
        state.ambassadorsFilters = action.payload
        state.loading = false
        state.error = null
      })

      .addMatcher(isAnyOf(getAmbassadorsFilters.pending), setPending)
      .addMatcher(isAnyOf(getAmbassadorsFilters.rejected), setError)
  },
})
export const { setSearch } = ambassadorsFiltersSlice.actions
export default ambassadorsFiltersSlice.reducer
