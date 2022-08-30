import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { CountriesState, SystemError } from './../../types'

const initialState: CountriesState = {
  countries: [],
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

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    ddd: (state, action) => {},
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
  },
})

export default countriesSlice.reducer
