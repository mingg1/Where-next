import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../types'
import SearchBar from '../components/SearchBar'
import Table from '../components/Table'

export default function Home() {
  const { countryData } = useSelector((state: RootState) => state)

  return (
    <div className="content-container">
      <SearchBar />
      {countryData.isLoading ? (
        <h1 className="loading-msg">
          Loading countries{' '}
          <span role="img" aria-label="globe">
            🌎
          </span>
          ...
        </h1>
      ) : countryData.error ? (
        <h1 className="error-msg">{`${countryData.error.message}, try again!`}</h1>
      ) : (
        <Table />
      )}
    </div>
  )
}
