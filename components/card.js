import React from 'react'
import Styles from '../styles/card.module.css'

import Image from 'next/image'

export default function card(char) {
   
  return (
    <>
        <div className={Styles.card}>
        <Image className='image' width={600} height={650}  src={char.img} alt="pers"  />
        <div className={Styles.info}>
                <h1>{char.name}</h1>
                <h4>Nik Name: </h4>
                <p>{char.nickname}  </p>
                <h4>Occupation: </h4>
                <p>{char.occupation}</p>
            </div>
        </div>
        
    </>
  )
}



