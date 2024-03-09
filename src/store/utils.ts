import type { UnknownAction } from "@reduxjs/toolkit"
import type { TypeRequest } from "./types"
import type { AxiosError } from "axios"

export const setPending = (state: TypeRequest) => {
  state.error = null
  state.loading = true
}

export const setError = (state: TypeRequest, action: UnknownAction) => {
  let { message } = action.payload as AxiosError
  state.error = message
  state.loading = false
}
