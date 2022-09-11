import {
  sortByNameAsc,
  sortByNameDsc,
  sortByPopulationAsc,
  sortByPopulationDsc,
} from './../../utils/helper'
import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { CountriesState, SortingType, SystemError } from './../../types'

const initialState: CountriesState = {
  countries: [],
  searchResults: [],
  country: {
    name: { common: '' },
    currencies: {},
    capital: [],
    region: '',
    languages: {},
    population: 0,
    flags: {
      png: '',
    },
    flag: '',
  },
  isLoading: false,
  error: null,
  isSearching: false,
  nameSorting: null,
  populationSorting: null,
}

export const getAllCountries = createAsyncThunk(
  'countries/getAllCountries',
  async (_, { rejectWithValue }) => {
    try {
      const countryResponse = await axios('https://restcountries.com/v3.1/all')
      return countryResponse.data
    } catch (error) {
      return rejectWithValue(error as SystemError)
    }
  }
)

export const getCountry = createAsyncThunk(
  'countries/getCountry',
  async (name: string, { rejectWithValue }) => {
    try {
      const countryResponse = await axios(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
      )
      return countryResponse.data[0]
    } catch (error) {
      return rejectWithValue(error as SystemError)
    }
  }
)

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    findCountry: (state, action) => {
      state.country = state.countries.filter(
        (country) => country.name.common === action.payload
      )[0]
    },
    sortCountryListByName: (state) => {
      if (
        state.nameSorting === null ||
        state.nameSorting === SortingType.nameDescending
      ) {
        if (state.searchResults.length !== 0) {
          state.searchResults = sortByNameDsc(state.searchResults)
        } else {
          state.countries = sortByNameDsc(state.countries)
        }
        state.nameSorting = SortingType.nameAscending
      } else {
        if (state.searchResults.length !== 0) {
          state.searchResults = sortByNameAsc(state.searchResults)
        } else {
          state.countries = sortByNameAsc(state.countries)
        }
        state.nameSorting = SortingType.nameDescending
      }
    },
    sortCountryListByPopulation: (state) => {
      if (
        state.populationSorting === null ||
        state.populationSorting === SortingType.populationDescending
      ) {
        if (state.searchResults.length !== 0) {
          state.searchResults = sortByPopulationDsc(state.searchResults)
        } else {
          state.countries = sortByPopulationDsc(state.countries)
        }
        state.populationSorting = SortingType.populationAscending
      } else {
        if (state.searchResults.length !== 0) {
          state.searchResults = sortByPopulationAsc(state.searchResults)
        } else {
          state.countries = sortByPopulationAsc(state.countries)
        }
        state.populationSorting = SortingType.populationDescending
      }
    },
    searchCountries: (state, action) => {
      state.searchResults = state.countries.filter((country) =>
        country.name.common.toLowerCase().includes(action.payload)
      )
    },
    setIsSearching: (state, action: { payload: boolean }) => {
      if (!action.payload) state.searchResults = []
      state.isSearching = action.payload
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllCountries.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getAllCountries.fulfilled, (state, action) => {
      state.countries = action.payload
      state.isLoading = false
    })
    builder.addCase(getAllCountries.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as SystemError
    })

    builder.addCase(getCountry.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getCountry.fulfilled, (state, action) => {
      state.isLoading = false
      state.country = action.payload
    })
    builder.addCase(getCountry.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as SystemError
    })
  },
})

export const {
  findCountry,
  sortCountryListByName,
  sortCountryListByPopulation,
  searchCountries,
  setIsSearching,
} = countriesSlice.actions
export default countriesSlice.reducer
