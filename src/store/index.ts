import { configureStore } from "@reduxjs/toolkit"
import authReduce from "./auth/auth.slice"
import ambasadorsReduce from "./ambassadors/ambasadors.slice"
import ambasadorsFiltersReduce from "./ambassadorsFilters/ambassadorsFilters.slice"

const store = configureStore({
  reducer: {
    authSlice: authReduce,
    ambasadorsFiltersSlice: ambasadorsFiltersReduce,
    ambasadorsSlice: ambasadorsReduce,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
