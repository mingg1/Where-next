import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findCountry, getCountry } from '../redux/slices/countriesSlice'
import { AppDispatch, RootState } from '../types'
import AddFavoriteButton from '../components/AddFavoriteButton'
import { Card, CardContent, CardMedia } from '@mui/material'

export default () => {
  const { name } = useParams<{ name: string }>()
  const dispatch = useDispatch<AppDispatch>()
  const {
    countryData: { countries, country },
  } = useSelector((state: RootState) => state)

  useEffect(() => {
    countries.length !== 0
      ? dispatch(findCountry(name))
      : dispatch(getCountry(name))
  }, [dispatch, name, countries])

  return (
    <div className="content-container">
      <p className="intro">Alrighty, You picked ... </p>
      <Card className="card">
        <CardMedia
          className="card--img"
          component="img"
          height="200"
          image={country.flags.png}
          alt={country.name.common}
        />
        <CardContent className="card--content">
          <AddFavoriteButton name={country.name.common} flag={country.flag} />
          <h2>{country.region}</h2>
          <h1>{country.name.common}</h1>
          <div className="card--content__top">
            <div>
              <p className="card--content__top--title">Capital city</p>
              <p>{country.capital?.length > 0 && country.capital.join(', ')}</p>
            </div>
            <div>
              <p className="card--content__top--title">Population</p>
              <p>{country.population}</p>
            </div>
          </div>
          <div>
            <p className="card--content__top--title">Languages</p>
            <ul>
              {Object.values(country.languages).map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </div>
          {country.currencies && (
            <div>
              <p className="card--content__top--title">Currencies</p>
              <ul>
                {Object.values(country.currencies).map((currency) => (
                  <li key={currency.name}>
                    {currency.name} · {currency.symbol}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
