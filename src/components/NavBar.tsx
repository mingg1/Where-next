import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme, toggleFavList } from '../redux/slices/uiSlice'
import { AppDispatch, RootState, ThemeType } from '../types'
import { IconButton } from '@mui/material'
import {
  FavoriteBorderRounded,
  Brightness5,
  DarkModeRounded,
} from '@mui/icons-material'

const NavBar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {
    favoriteCountries,
    ui: { theme },
  } = useSelector((state: RootState) => state)
  const handleThemeBtnClicked = () => dispatch(changeTheme())
  const handleFavBtnClicked = () => dispatch(toggleFavList())

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="app-title">
            Where next?{' '}
            <span role="img" aria-label="map">
              🗺️
            </span>
          </Link>
        </li>
        <li>
          <IconButton
            size="large"
            disableRipple
            aria-label="change-theme"
            onClick={handleThemeBtnClicked}
          >
            {theme === ThemeType.light ? (
              <Brightness5 className="nav--btn--icon" fontSize="inherit" />
            ) : (
              <DarkModeRounded className="nav--btn--icon" fontSize="inherit" />
            )}
          </IconButton>
        </li>
        <li>
          <IconButton
            size="large"
            disableRipple
            aria-label="favorite-list"
            onClick={handleFavBtnClicked}
          >
            <FavoriteBorderRounded
              fontSize="inherit"
              className="nav--btn--icon"
            />
            <span className="favorite-list-count">
              {favoriteCountries.length}
            </span>
          </IconButton>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
