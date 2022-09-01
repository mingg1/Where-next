import React from 'react'
import { useSelector } from 'react-redux'
import { Rootstate } from '../redux/store'
import SearchBar from '../components/SearchBar'
import Table from '../components/Table'

export default function Home() {
  const { countryData } = useSelector((state: Rootstate) => state)

  return (
    <>
      <SearchBar />
      {countryData.isLoading ? 'loading...' : <Table />}
    </>
  )
}
