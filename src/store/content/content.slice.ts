import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { setError, setPending } from "../utils"
import type { TypeRequest } from "../types"
import {
  getСontent,
  getСontentByID,
  patchСontentByID,
  postСontent,
} from "./content.api"
import type { ContentPage, СontentType } from "./type"

type TypeInitialState = TypeRequest &
  ContentPage & {
    currentContent: СontentType
  }

const initialState: TypeInitialState = {
  count: 0,
  next: "",
  previous: "",
  results: [],
  currentContent: {
    id: 0,
    status: "",
    full_name: "",
    telegram: "",
    link: "",
    guide: true,
    created_date: "",
    ambassador: 0,
  },
  loading: false,
  error: null,
}

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getСontent.fulfilled, (state, action) => {
        state.count = action.payload.count
        state.next = action.payload.next
        state.previous = action.payload.previous
        state.results = action.payload.results
        state.loading = false
        state.error = null
        console.log(action.payload)
      })
      .addCase(patchСontentByID.fulfilled, (state, action) => {
        const updatedContentIndex = state.results.findIndex(
          content => content.id === action.payload.id,
        )
        if (updatedContentIndex !== -1) {
          state.results[updatedContentIndex] = action.payload // Обновляем существующий контент
        } else {
          state.results.push(action.payload) // Если контент не найден, добавляем его
        }
        state.currentContent = action.payload
        state.loading = false
        state.error = null
        console.log(action.payload)
      })
      .addMatcher(
        isAnyOf(postСontent.fulfilled, getСontentByID.fulfilled),
        (state, action) => {
          state.results.push(action.payload) // Добавляем новый контент в список
          state.currentContent = action.payload
          state.loading = false
          state.error = null
          console.log(action.payload)
        },
      )

      .addMatcher(isAnyOf(getСontent.pending, postСontent.pending), setPending)
      .addMatcher(isAnyOf(getСontent.rejected, postСontent.rejected), setError)
  },
})
// export const {} = contentSlice.actions
export default contentSlice.reducer
