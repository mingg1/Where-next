import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  sortCountryListByName,
  sortCountryListByPopulation,
} from '../redux/slices/countriesSlice'
import { AppDispatch, RootState, SortingType } from '../types'
import { TableCell, TableHead, TableRow, IconButton } from '@mui/material'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'

const TableHeader = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {
    countryData: { nameSorting, populationSorting },
  } = useSelector((state: RootState) => state)

  const handleNameSortBtnClicked = () => dispatch(sortCountryListByName())
  const handlePopulationBtnClicked = () =>
    dispatch(sortCountryListByPopulation())

  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">Flag</TableCell>
        <TableCell align="center" className="table--column-btn--container">
          Name
          <IconButton
            disableRipple
            size="large"
            onClick={handleNameSortBtnClicked}
          >
            {nameSorting === SortingType.nameDescending ? (
              <KeyboardArrowUp fontSize="inherit" />
            ) : (
              <KeyboardArrowDown fontSize="inherit" />
            )}
          </IconButton>
        </TableCell>
        <TableCell align="center">Capital city</TableCell>
        <TableCell align="center">Region</TableCell>
        <TableCell align="center">Language</TableCell>
        <TableCell align="center" className="table--column-btn--container">
          Population
          <IconButton
            size="large"
            disableRipple
            onClick={handlePopulationBtnClicked}
          >
            {populationSorting === SortingType.populationDescending ? (
              <KeyboardArrowUp fontSize="inherit" />
            ) : (
              <KeyboardArrowDown fontSize="inherit" />
            )}
          </IconButton>
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  )
}
export default TableHeader
