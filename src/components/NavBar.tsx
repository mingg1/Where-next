import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleList } from '../redux/slices/favListOpenedSlice'
import { AppDispatch } from '../redux/store'

const NavBar = () => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <nav>
      <ul>
        <li>
          Country finder
          <span role="img" aria-label="pushpin">
            📍
          </span>
        </li>
        <li>
          <Button>Theme</Button>
        </li>
        <li>
          <Button
            onClick={() => {
              dispatch(toggleList())
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
