import React from 'react'
import { TableCell, TableHead, TableRow, Button } from '@mui/material'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { AppDispatch, RootState, SortingType } from '../types'
import { useDispatch, useSelector } from 'react-redux'
import {
  sortCountryListByName,
  sortCountryListByPopulation,
} from '../redux/slices/countriesSlice'

const TableHeader = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {
    countryData: { nameSorting, populationSorting },
  } = useSelector((state: RootState) => state)
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">Flag</TableCell>
        <TableCell align="center">
          Name
          <Button
            onClick={() => {
              dispatch(sortCountryListByName())
            }}
          >
            {nameSorting === SortingType.nameDescending ? (
              <KeyboardArrowUp />
            ) : (
              <KeyboardArrowDown />
            )}
          </Button>
        </TableCell>
        <TableCell align="center">Capital city</TableCell>
        <TableCell align="center">Region</TableCell>
        <TableCell align="center">Language</TableCell>
        <TableCell align="center">
          Population
          <Button
            onClick={() => {
              dispatch(sortCountryListByPopulation())
            }}
          >
            {populationSorting === SortingType.populationDescending ? (
              <KeyboardArrowUp />
            ) : (
              <KeyboardArrowDown />
            )}
          </Button>
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  )
}
export default TableHeader
