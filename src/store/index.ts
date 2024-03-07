import { configureStore } from "@reduxjs/toolkit"
import authReduce from "./auth/auth.slice"
import ambassadorsReduce from "./ambassadors/ambassadors.slice"
import ambassadorsFiltersReduce from "./ambassadorsFilters/ambassadorsFilters.slice"
import ambassadorReduce from "./ambassador/ambassador.slice"

const store = configureStore({
  reducer: {
    authSlice: authReduce,
    ambassadorsFiltersSlice: ambassadorsFiltersReduce,
    ambassadorsSlice: ambassadorsReduce,
    ambassadorSlice: ambassadorReduce,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
