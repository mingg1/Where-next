import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FavoriteCountry, AppDispatch, RootState } from '../types'
import { addFavCountry, removeFavCountry } from '../redux/slices/favoritesSlice'
import { FavoriteBorder, Favorite } from '@mui/icons-material'
import { IconButton } from '@mui/material'

const AddFavoriteButton = ({ name, flag }: FavoriteCountry) => {
  const dispatch = useDispatch<AppDispatch>()
  const { favoriteCountries } = useSelector((state: RootState) => state)
  const isInList = favoriteCountries.find(
    (favCountry) => favCountry.name === name
  )

  const handleClicked = () => {
    isInList
      ? dispatch(removeFavCountry(name))
      : dispatch(addFavCountry({ name, flag }))
  }

  return (
    <IconButton size="large" disableRipple={true} onClick={handleClicked}>
      {isInList ? (
        <Favorite fontSize="inherit" />
      ) : (
        <FavoriteBorder fontSize="inherit" />
      )}
    </IconButton>
  )
}

export default AddFavoriteButton
