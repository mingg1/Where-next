import store from './redux/store'

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

export enum SortingType {
  nameAscending = 'nameAscending',
  nameDescending = 'nameDescending',
  populationAscending = 'populationAscending',
  populationDescending = 'populationDescending',
}

export type SystemError = {
  message?: string
}

export type Country = {
  name: { common: string }
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  capital: string[]
  region: string
  languages: {
    [key: string]: string
  }
  population: number
  flags: {
    png: string
  }
  flag: string
}

export type FavoriteCountry = {
  name: string
  flag: string
}

export type CountriesState = {
  countries: Country[]
  searchResults: Country[]
  country: Country
  isLoading: boolean
  error: SystemError | null
  isSearching: boolean
  nameSorting: SortingType | null
  populationSorting: SortingType | null
}

export type FavoriteCountriesState = FavoriteCountry[]

export type UiState = {
  drawerOpen: boolean
  theme: ThemeType
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
