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
        state.countries = state.countries.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        )
        state.nameSorting = SortingType.nameAscending
      } else {
        state.countries = state.countries.sort((a, b) =>
          b.name.common.localeCompare(a.name.common)
        )
        state.nameSorting = SortingType.nameDescending
      }
    },
    sortCountryListByPopulation: (state) => {
      if (
        state.populationSorting === null ||
        state.populationSorting === SortingType.populationDescending
      ) {
        state.countries = state.countries.sort(
          (a, b) => a.population - b.population
        )
        state.populationSorting = SortingType.populationAscending
      } else {
        state.countries = state.countries.sort(
          (a, b) => b.population - a.population
        )
        state.populationSorting = SortingType.populationDescending
      }
    },
    searchCountries: (state, action) => {
      state.searchResults = state.countries.filter((country) =>
        country.name.common.toLowerCase().includes(action.payload)
      )
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
} = countriesSlice.actions
export default countriesSlice.reducer
