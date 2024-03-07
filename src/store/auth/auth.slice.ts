import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { login, logout } from "./auth.api"
import { setError, setPending } from "../utils"
import { removeToken, setToken } from "../../utils/tokenStorage"
import type { TypeRequest } from "../types"

type TypeInitialState = {
  isAuthorized: boolean
}

const initialState: TypeInitialState & TypeRequest = {
  isAuthorized: false,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload)
        setToken(action.payload.auth_token)
        state.isAuthorized = true
      })
      .addCase(logout.fulfilled, state => {
        removeToken()
        state.isAuthorized = false
      })

      .addMatcher(isAnyOf(login.pending, logout.pending), setPending)
      .addMatcher(isAnyOf(login.rejected, logout.rejected), setError)
  },
})

export default authSlice.reducer
