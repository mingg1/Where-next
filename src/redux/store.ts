import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from './slices/countriesSlice'
import favoritesReducer from './slices/favoritesSlice'
import favListOpenedReducer from './slices/favListOpenedSlice'

const store = configureStore({
  reducer: {
    countryData: countriesReducer,
    favoriteCountries: favoritesReducer,
    favListOpened: favListOpenedReducer,
  },
})

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
