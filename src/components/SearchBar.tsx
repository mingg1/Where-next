import React, { useEffect, useState } from 'react'
import { InputBase } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../types'
import { searchCountries } from '../redux/slices/countriesSlice'

const SearchBar = () => {
  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(evt.target.value)

  useEffect(() => {
    const search = setTimeout(() => {
      dispatch(searchCountries(keyword))
    }, 500)
    return () => clearTimeout(search)
  }, [keyword, dispatch])

  return (
    <>
      <InputBase
        type="text"
        placeholder="Search by country name"
        onChange={handleInputChange}
      />
      <Search />
    </>
  )
}
export default SearchBar
