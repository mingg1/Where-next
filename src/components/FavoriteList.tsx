import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavList } from '../redux/slices/uiSlice'
import { AppDispatch, RootState } from '../types'
import FavoriteCountryItem from './FavoriteCountryItem'

const FavoriteList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { favoriteCountries } = useSelector((state: RootState) => state)

  return (
    <div>
      <Button onClick={() => dispatch(toggleFavList())}>Close</Button>
      <section>
        <h1>Favorite countries</h1>
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
