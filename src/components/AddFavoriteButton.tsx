import React from 'react'
import { Button } from '@mui/material'
import { FavoriteBorder, Favorite } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { addFavCountry, removeFavCountry } from '../redux/slices/favoritesSlice'
import { FavoriteCountry, AppDispatch, RootState } from '../types'

const AddFavoriteButton = ({ name, flag }: FavoriteCountry) => {
  const dispatch = useDispatch<AppDispatch>()
  const { favoriteCountries } = useSelector((state: RootState) => state)
  const isInList = favoriteCountries.find(
    (favCountry) => favCountry.name === name
  )

  return (
    <>
      <Button
        onClick={() => {
          isInList
            ? dispatch(removeFavCountry(name))
            : dispatch(addFavCountry({ name, flag }))
        }}
      >
        {isInList ? <Favorite /> : <FavoriteBorder />}
      </Button>
    </>
  )
}

export default AddFavoriteButton
