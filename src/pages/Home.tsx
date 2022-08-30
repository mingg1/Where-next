import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

import { AppState } from '../types'

import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'
import { getAllCountries } from '../redux/slices/countriesSlice'
import store from '../redux/store'

export default function Home() {
  const dispatch = useDispatch<typeof store.dispatch>()
  const { countries } = useSelector((state: AppState) => state)
  console.log(countries)

  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])

  return (
    <>
      <h2>{countries.isLoading ? 'hi' : 'done'}</h2>
      <NavBar />
      <SearchBar />
    </>
  )
}
