import { CountriesState } from '../../types'
/* eslint-disable indent */

const defaultState: CountriesState = {
  countries: [],
  isLoading: false,
  error: null,
}

export default (
  state: CountriesState = defaultState,
  action: any
): CountriesState => {
  switch (action.type) {
    case 'REQ':
      return { ...state, isLoading: true }
    case 'SUCCESS':
      return { ...state, countries: action.payload, isLoading: false }
    case 'FAIL':
      return { ...state, error: action.payload, isLoading: false }
    default:
      return state
  }
}
