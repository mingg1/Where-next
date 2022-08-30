import { TOGGLE_FAV_LIST, ToggleDialogAction, DialogType } from '../../types'

export function toggleDialog(dialog: DialogType): ToggleDialogAction {
  return {
    type: TOGGLE_FAV_LIST,
    payload: {
      dialog,
    },
  }
}
