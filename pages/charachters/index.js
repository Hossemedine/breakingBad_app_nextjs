import { getInitialProps } from 'next/dist/shared/lib/utils'
import React from 'react'
import Card from '../../components/card'


function Charachters({data}) {
  
  
  return (
    <>
    <Card/>
    </>
  )
}

export default Charachters

Charachters.getInitialProps = async () => {
  const res = await fetch('https://www.breakingbadapi.com/api/characters')
  const data = await res.json()
  return { data}
} 