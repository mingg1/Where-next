import { combineReducers } from 'redux'

import countries from './countries'
import ui from './ui'

const createRootReducer = () =>
  combineReducers({
    countries,
    ui,
  })

export default createRootReducer
