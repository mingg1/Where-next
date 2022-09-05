import { ThemeType, UiState } from './../../types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: UiState = {
  drawerOpen: false,
  theme: ThemeType.light,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleFavList: (state) => {
      state.drawerOpen = !state.drawerOpen
    },
    changeTheme: (state) => {
      state.theme =
        state.theme === ThemeType.light ? ThemeType.dark : ThemeType.light
    },
  },
})

export const { toggleFavList, changeTheme } = uiSlice.actions
export default uiSlice.reducer
