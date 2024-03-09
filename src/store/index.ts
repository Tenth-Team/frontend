import { configureStore } from "@reduxjs/toolkit"
import authReduce from "./auth/auth.slice"
import ambassadorsReduce from "./ambassadors/ambassadors.slice"
import ambassadorsFiltersReduce from "./ambassadorsFilters/ambassadorsFilters.slice"
import ambassadorReduce from "./ambassador/ambassador.slice"
import promocodesReduce from "./promocodes/promocodes.slice"
import contentReduce from "./content/content.slice"

const store = configureStore({
  reducer: {
    authSlice: authReduce,
    ambassadorsFiltersSlice: ambassadorsFiltersReduce,
    ambassadorsSlice: ambassadorsReduce,
    ambassadorSlice: ambassadorReduce,
    promocodesSlice: promocodesReduce,
    contentSlice: contentReduce,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
