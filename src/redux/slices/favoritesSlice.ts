import { createSlice } from '@reduxjs/toolkit'
import { FavoriteCountriesState } from './../../types'

const initialState: FavoriteCountriesState = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavCountry: (
      state,
      action: { payload: { name: string; flag: string } }
    ) => {
      if (state.some((country) => country.name === action.payload.name)) {
        return state
      }
      state.push(action.payload)
    },
    removeFavCountry: (state, action) => {
      return state.filter((country) => country.name !== action.payload)
    },
  },
})

export const { addFavCountry, removeFavCountry } = favoritesSlice.actions
export default favoritesSlice.reducer
