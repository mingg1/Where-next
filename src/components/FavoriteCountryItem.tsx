import { Button } from '@mui/material'
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

  return (
    <div>
      <h2>{country.flag}</h2>
      <Link to={`/${country.name}`}>{country.name}</Link>
      <Button
        onClick={() => {
          dispatch(removeFavCountry(country.name))
        }}
      >
        <DeleteOutlined />
      </Button>
    </div>
  )
}

export default FavoriteCountryItem
