import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchCountries, setIsSearching } from '../redux/slices/countriesSlice'
import { AppDispatch } from '../types'
import { InputBase } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(evt.target.value)

  useEffect(() => {
    keyword !== ''
      ? dispatch(setIsSearching(true))
      : dispatch(setIsSearching(false))

    const search = setTimeout(() => {
      keyword !== '' && dispatch(searchCountries(keyword))
    }, 500)

    return () => clearTimeout(search)
  }, [keyword, dispatch])

  return (
    <div className="search-bar-container">
      <InputBase
        type="text"
        placeholder="Search by country name"
        onChange={handleInputChange}
      />
      <Search className="search-icon" fontSize="medium" />
    </div>
  )
}
export default SearchBar
