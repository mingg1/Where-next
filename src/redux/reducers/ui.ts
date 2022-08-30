/* eslint-disable indent */
import { TOGGLE_FAV_LIST, UiState, UiActions } from '../../types'

const defaultState: UiState = {
  dialogOpen: {},
}

export default function ui(
  state: UiState = defaultState,
  action: UiActions
): UiState {
  switch (action.type) {
    case TOGGLE_FAV_LIST: {
      return {
        ...state,
        dialogOpen: {
          ...state.dialogOpen,
          [action.payload.dialog]: !state.dialogOpen[action.payload.dialog],
        },
      }
    }

    default:
      return state
  }
}
