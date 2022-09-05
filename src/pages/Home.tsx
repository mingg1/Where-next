import React from 'react'
import { useSelector } from 'react-redux'
import SearchBar from '../components/SearchBar'
import Table from '../components/Table'
import { RootState } from '../types'

export default function Home() {
  const { countryData } = useSelector((state: RootState) => state)

  return (
    <>
      <SearchBar />
      {countryData.isLoading ? 'loading...' : <Table />}
    </>
  )
}
