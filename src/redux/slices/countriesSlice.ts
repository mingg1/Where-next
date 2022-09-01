import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { CountriesState, SystemError } from './../../types'

const initialState: CountriesState = {
  countries: [],
  country: {
    cca2: '',
    name: { common: '' },
    currencies: {},
    capital: [],
    region: '',
    languages: {},
    population: 0,
    flags: {
      png: '',
    },
  },
  isLoading: false,
  error: null,
}

export const getAllCountries = createAsyncThunk(
  'countries/getAllCountries',
  async (_, { rejectWithValue }) => {
    try {
      const countryResponse = await axios('https://restcountries.com/v3.1/all')
      return countryResponse.data
    } catch (error) {
      console.log(error)
      return rejectWithValue(error as SystemError)
    }
  }
)

export const getCountry = createAsyncThunk(
  'countries/getCountry',
  async (name: string, { rejectWithValue }) => {
    try {
      const countryResponse = await axios(
        `https://restcountries.com/v2/name/${name}?fullText=true`
      )
      return countryResponse.data
    } catch (error) {
      console.log(error)
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
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCountries.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getAllCountries.fulfilled, (state, action) => {
      state.countries = action.payload
      state.isLoading = false
    })
    builder.addCase(getAllCountries.rejected, (state) => {
      state.isLoading = false
    })

    builder.addCase(getCountry.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getCountry.fulfilled, (state, action) => {
      state.isLoading = false
      state.country = action.payload
    })
    builder.addCase(getCountry.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const { findCountry } = countriesSlice.actions
export default countriesSlice.reducer
