import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { findCountry, getCountry } from '../redux/slices/countriesSlice'
import { AppDispatch, Rootstate } from '../redux/store'

export default () => {
  const { name } = useParams<{ name: string }>()
  const dispatch = useDispatch<AppDispatch>()
  const {
    countryData: { countries, country },
  } = useSelector((state: Rootstate) => state)

  useEffect(() => {
    console.log(countries)
    countries.length !== 0
      ? dispatch(findCountry(name))
      : dispatch(getCountry(name))
  }, [dispatch, name, countries])

  return <>{country !== undefined ? <h1>{country.name}</h1> : 'No results'}</>
}
