import { createSlice } from '@reduxjs/toolkit'
import { FavoriteCountriesState } from './../../types'

const initialState: FavoriteCountriesState = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavCountry: (state, action) => {
      state.push(action.payload)
    },
    removeFavCountry: (state, action) => {
      return state.filter((country) => country.name !== action.payload)
    },
  },
})

export const { addFavCountry, removeFavCountry } = favoritesSlice.actions
export default favoritesSlice.reducer
