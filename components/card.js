import React from 'react'
import Styles from '../styles/card.module.css'

import Image from 'next/image'

export default function card({data}) {
    console.log(data)
  return (
    <>
        <div className={Styles.card}>
        <Image className='image' width={600} height={650}  src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg" alt="pers"  />
        <div className={Styles.info}>
                <h1>Walter white</h1>
                <h4>Nik Name: </h4>
                <p>Heisenberg  </p>
                <h4>Occupation: </h4>
                <p>High School Chemistry Teacher,Meth King Pin</p>
            </div>
        </div>
        
    </>
  )
}



