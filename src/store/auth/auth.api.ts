// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { CONFIG_API } from "../../utils/data"
// import type { AuthToken, LoginData } from "../../@types/api"
// import { setToken } from "../../utils/tokenStorage"

// export const auth = createApi({
//   reducerPath: "auth/api",
//   baseQuery: fetchBaseQuery(CONFIG_API),
//   endpoints: builder => ({
//     login: builder.query<AuthToken, LoginData>({
//       query: data => ({
//         url: "/api/v1/auth/token/login/",
//         method: "POST",
//         body: data,
//       }),
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         try {
//           const response = await queryFulfilled
//           if (response.data.auth_token) {
//             setToken(response.data.auth_token)
//           }
//         } catch (error) {
//           console.error("Login request failed:", error)
//           throw error
//         }
//       },
//     }),
//   }),
// })

// export const { useLazyLoginQuery } = auth
