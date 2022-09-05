import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { changeTheme, toggleFavList } from '../redux/slices/uiSlice'
import { AppDispatch } from '../types'

const NavBar = () => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <nav>
      <ul>
        <li>
          Where next?
          <span role="img" aria-label="pushpin">
            📍
          </span>
        </li>
        <li>
          <Button
            onClick={() => {
              dispatch(changeTheme())
            }}
          >
            Theme
          </Button>
        </li>
        <li>
          <Button
            onClick={() => {
              dispatch(toggleFavList())
            }}
          >
            Cart
          </Button>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
