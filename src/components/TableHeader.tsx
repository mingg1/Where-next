import React from 'react'
import { TableCell, TableHead, TableRow } from '@mui/material'

const TableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell align="center">Flag</TableCell>
      <TableCell align="center">Name</TableCell>
      <TableCell align="center">Capital city</TableCell>
      <TableCell align="center">Region</TableCell>
      <TableCell align="center">Language</TableCell>
      <TableCell align="center">Population</TableCell>
      <TableCell></TableCell>
    </TableRow>
  </TableHead>
)

export default TableHeader
