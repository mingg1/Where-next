import React from 'react'
import { useParams } from 'react-router-dom'

export default () => {
  const { name } = useParams<{ name: string }>()

  console.log(name)

  return (
    <>
      <h1>Product page</h1>
    </>
  )
}
