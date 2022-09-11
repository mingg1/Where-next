import { IconButton } from '@mui/material'
import React from 'react'
import { AppDispatch, FavoriteCountry } from '../types'
import { DeleteOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { removeFavCountry } from '../redux/slices/favoritesSlice'
import { Link } from 'react-router-dom'

type FavoriteCountryItemProps = {
  country: FavoriteCountry
}
const FavoriteCountryItem = ({ country }: FavoriteCountryItemProps) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleClicked = () => dispatch(removeFavCountry(country.name))

  return (
    <li>
      <h2>{country.flag}</h2>
      <Link to={`/${country.name}`}>{country.name}</Link>
      <IconButton onClick={handleClicked}>
        <DeleteOutlined />
      </IconButton>
    </li>
  )
}

export default FavoriteCountryItem
