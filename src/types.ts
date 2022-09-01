// Action types
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const TOGGLE_FAV_LIST = 'TOGGLE_FAV_LIST'
export const CHANGE_THEME = 'CHANGE_THEME'

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

export type SystemError = {
  message?: string
}

export type Country = {
  cca2: string
  name: { common: string }
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  capital: string[] | string
  region: string
  languages: {
    [key: string]: string
  }
  population: number
  flags: {
    png: string
  }
}

export type ProductState = {
  inCart: Country[]
}

export type CountriesState = {
  countries: Country[]
  country: Country
  isLoading: boolean
  error: SystemError | null
}

export type FavoritesState = {
  favorites: Partial<Country>[]
}

export type DrawerState = {
  isOpened: boolean
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {}
}

export type AppState = {
  //product: ProductState
  ui: UiState
  countries: CountriesState
}
