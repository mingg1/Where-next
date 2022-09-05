import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from './slices/countriesSlice'
import favoritesReducer from './slices/favoritesSlice'
import uiReducer from './slices/uiSlice'

const store = configureStore({
  reducer: {
    countryData: countriesReducer,
    favoriteCountries: favoritesReducer,
    ui: uiReducer,
  },
})

export default store
