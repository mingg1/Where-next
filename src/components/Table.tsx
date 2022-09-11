import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries } from '../redux/slices/countriesSlice'
import { AppDispatch, RootState } from '../types'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import { Table as MTable, TableContainer } from '@mui/material'

const Table = () => {
  const {
    countryData: { countries, searchResults, isSearching },
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    countries.length === 0 && dispatch(getAllCountries())
  }, [dispatch, countries.length])

  return (
    <TableContainer className="table">
      <MTable area-label="country list">
        <TableHeader />
        <TableBody list={isSearching === true ? searchResults : countries} />
      </MTable>
    </TableContainer>
  )
}

export default Table
