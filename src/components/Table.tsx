import React, { useEffect } from 'react'
import {
  Button,
  Table as MTable,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material'
import TableHeader from './TableHeader'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, Rootstate } from '../redux/store'
import { Link } from 'react-router-dom'
import { getAllCountries } from '../redux/slices/countriesSlice'
import { Country } from '../types'
import { addFavCountry } from '../redux/slices/favoritesSlice'

const Table = () => {
  const { countryData, favoriteCountries } = useSelector(
    (state: Rootstate) => state
  )
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    countryData.countries.length === 0 && dispatch(getAllCountries())
  }, [dispatch, countryData.countries.length])

  return (
    <TableContainer>
      <MTable area-label="country list">
        <TableHeader />
        <TableBody>
          {countryData.countries.length > 0 &&
            countryData.countries.map((country: Country) => {
              const isAdded = favoriteCountries.filter(
                (favCountry) => favCountry.name?.common === country.name.common
              )
              return (
                <TableRow key={country.cca2}>
                  <TableCell align="center">
                    <figure>
                      <img
                        src={country.flags.png}
                        alt={country.name.common}
                        style={{ width: 100 }}
                      />
                    </figure>
                  </TableCell>
                  <TableCell align="center">
                    <Link to={country.name.common.replace(/ /g, '-')}>
                      {country.name.common}
                    </Link>
                  </TableCell>
                  <TableCell align="center">{country.capital}</TableCell>
                  <TableCell align="center">{country.region}</TableCell>
                  <TableCell align="center">{'lll'}</TableCell>
                  <TableCell align="center">{country.population}</TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => {
                        dispatch(addFavCountry({ name: country.name.common }))
                      }}
                    >
                      {isAdded ? 'Like' : 'Unlike'}
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
        </TableBody>
      </MTable>
    </TableContainer>
  )
}

export default Table
