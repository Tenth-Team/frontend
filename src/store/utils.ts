import type { UnknownAction } from "@reduxjs/toolkit"
import type { TypeRequest, TypeRequestError } from "./types"

export const setPending = (state: TypeRequest) => {
  state.error = null
  state.loading = true
}

export const setError = (state: TypeRequest, action: UnknownAction) => {
  let { detail } = action.payload as TypeRequestError
  state.error = detail
  state.loading = false
}
