import React from 'react'
import { TableBody as TBody, TableCell, TableRow } from '@mui/material'
import { Country } from '../types'
import { Link } from 'react-router-dom'
import AddFavoriteButton from './AddFavoriteButton'

type TableBodyProps = {
  list: Country[]
}

const TableBody = ({ list }: TableBodyProps) => (
  <TBody>
    {list.length > 0 &&
      list.map((country: Country) => {
        return (
          <TableRow key={country.name.common}>
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
              <Link to={country.name.common}>{country.name.common}</Link>
            </TableCell>
            <TableCell align="center">
              {country.capital?.length > 0 && country.capital.join(', ')}
            </TableCell>
            <TableCell align="center">{country.region}</TableCell>
            <TableCell align="center">
              {country.languages && Object.values(country.languages).join(', ')}
            </TableCell>
            <TableCell align="center">{country.population}</TableCell>
            <TableCell align="center">
              <AddFavoriteButton
                name={country.name.common}
                flag={country.flag}
              />
            </TableCell>
          </TableRow>
        )
      })}
  </TBody>
)

export default TableBody
