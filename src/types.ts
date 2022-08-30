// Action types
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const TOGGLE_FAV_LIST = 'TOGGLE_FAV_LIST'
export const CHANGE_THEME = 'CHANGE_THEME'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

export type SystemError = {
  message?: string
}

// A product
export type Country = {
  id: string
  name: string
}

export type AddProductAction = {
  type: typeof ADD_COUNTRY
  payload: {
    product: Country
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    product: Country
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_FAV_LIST
  payload: {
    dialog: DialogType
  }
}

export type ChangeThemeAction = {
  type: typeof CHANGE_THEME
  payload: {
    theme: ThemeType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Country[]
}

export type CountriesState = {
  countries: Country[]
  isLoading: boolean
  error: null
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  //product: ProductState
  ui: UiState
  countries: CountriesState
}
