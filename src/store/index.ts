import { configureStore } from "@reduxjs/toolkit"
// import { ambassadorsApi } from "./ambassadors/ambasadors.api"
import authReduce from "./auth/auth.slice"
import ambasadorsReduce from "./ambassadors/ambasadors.slice"

const store = configureStore({
  reducer: {
    // [ambassadorsApi.reducerPath]: ambassadorsApi.reducer, // для RTK
    authSlice: authReduce,
    ambasadorsSlice: ambasadorsReduce,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({}).concat([ambassadorsApi.middleware]), // для RTK
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
