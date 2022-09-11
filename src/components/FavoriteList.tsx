import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../types'
import { toggleFavList } from '../redux/slices/uiSlice'
import FavoriteCountryItem from './FavoriteCountryItem'
import { Divider, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const FavoriteList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {
    favoriteCountries,
    ui: { drawerOpen },
  } = useSelector((state: RootState) => state)

  const handleClicked = () => dispatch(toggleFavList())

  return (
    <div className={`favorite-countries-container ${drawerOpen ? 'open' : ''}`}>
      <IconButton
        disableRipple
        size="large"
        aria-label="close"
        onClick={handleClicked}
      >
        <CloseIcon fontSize="inherit" className="nav--btn--icon" />
      </IconButton>
      <section>
        <h1>Favorite countries</h1>
        <Divider light />
        <ul>
          {favoriteCountries.map((country) => (
            <FavoriteCountryItem key={country.name} country={country} />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default FavoriteList
