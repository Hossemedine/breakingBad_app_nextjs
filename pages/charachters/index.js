import { getInitialProps } from 'next/dist/shared/lib/utils'
import React from 'react'
import Cards from '../../components/cards'


function Charachters( {data}) {
  
 console.log('index.js: ',data)
  return (
    <>
    <Cards char={data}/>
      
    </>
  )
}

export default Charachters

Charachters.getInitialProps = async () => {
  const res = await fetch('https://www.breakingbadapi.com/api/characters')
  const data = await res.json()
  return { data }
} 