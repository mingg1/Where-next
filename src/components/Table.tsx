import React, { useEffect } from 'react'
import { Table as MTable, TableContainer } from '@mui/material'
import TableHeader from './TableHeader'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries } from '../redux/slices/countriesSlice'
import { AppDispatch, RootState } from '../types'
import TableBody from './TableBody'

const Table = () => {
  const {
    countryData: { countries, searchResults },
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    countries.length === 0 && dispatch(getAllCountries())
  }, [dispatch, countries.length])

  return (
    <TableContainer>
      <MTable area-label="country list">
        <TableHeader />
        <TableBody
          list={searchResults.length !== 0 ? searchResults : countries}
        />
      </MTable>
    </TableContainer>
  )
}

export default Table
