import { SystemError } from './../../types'
import axios from 'axios'
import { Dispatch } from 'redux'

import {
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  ProductActions,
  Country,
} from '../../types'

export const getAllCountries = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getAllCountriesRequest())
    try {
      const countryReq = await axios('https://restcountries.com/v3.1/all')
      dispatch(getAllCountriesSuccess(countryReq.data))
    } catch (error) {
      const err = error as SystemError
      dispatch(getAllCountriesFail(err.message))
    }
  }
}

export const getAllCountriesRequest = () => {
  return {
    type: 'REQ',
  }
}

export const getAllCountriesSuccess = (countries: Country[]) => {
  return {
    type: 'SUCCESS',
    payload: countries,
  }
}

export const getAllCountriesFail = (error?: string) => {
  return {
    type: 'FAIL',
    payload: error,
  }
}

export function addProduct(product: Country): ProductActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      product,
    },
  }
}

export function removeProduct(product: Country): ProductActions {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      product,
    },
  }
}

// An Example of Async action processed by redux-thunk middleware
export function fetchProduct(productId: string) {
  return (dispatch: Dispatch) => {
    return fetch(`products/${productId}`)
      .then((resp) => resp.json())
      .then((product) => {
        dispatch(addProduct(product))
      })
  }
}
