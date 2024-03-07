import type { RootState } from "."

export const getAmbassadorsData = (state: RootState) => state.ambassadorsSlice
export const getAuthData = (state: RootState) => state.authSlice
export const getAmbassadorData = (state: RootState) => state.ambassadorSlice
export const getAmbassadorsFiltersData = (state: RootState) =>
  state.ambassadorsFiltersSlice
export const getPromocodesData = (state: RootState) => state.promocodesSlice
export const getContentData = (state: RootState) => state.contentSlice
