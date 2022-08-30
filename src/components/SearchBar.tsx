import React from 'react'
import { InputBase } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => (
  <>
    <InputBase placeholder="Search by country name" />
    <Search />
  </>
)

export default SearchBar
