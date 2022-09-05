import { createSlice } from '@reduxjs/toolkit'
import { Country } from './../../types'

const initialState: Partial<Country>[] = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavCountry: (state, action) => {
      state.push(action.payload)
    },
    removeFavCountry: (state, action) => {
      state.filter((country) => country.name !== action.payload.name)
    },
  },
})

export const { addFavCountry, removeFavCountry } = favoritesSlice.actions
export default favoritesSlice.reducer
