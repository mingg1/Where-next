import { DrawerState } from './../../types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: DrawerState = {
  isOpened: false,
}

export const favListOpenedSlice = createSlice({
  name: 'favListOpened',
  initialState,
  reducers: {
    toggleList: (state) => {
      state.isOpened = !state.isOpened
    },
  },
})

export const { toggleList } = favListOpenedSlice.actions
export default favListOpenedSlice.reducer
