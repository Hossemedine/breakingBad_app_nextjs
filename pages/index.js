import Head from 'next/head'
import Image from 'next/image'
import Video from '../components/video'
import styles from '../styles/Home.module.css'
import React from 'react'
import ReactPlayer from 'react-player'
import VidyardPlayer from 'react-player/vidyard'



export default function Home() {
  return (
       <>
        <Head>
        <title>Breaking Bad|Home</title>
        </Head>
        <div className='home-containner '>
              <div className='info '>
                <Image
                className='image' 
                width={750}
                height={850}
                src="/../public/1.jpg" alt="" />
                <div className="info--text">
                    <h1>Breaking<span>Bad</span></h1>
                    <p><span>16</span> Emmys awward</p>
                    <p><span>58</span> Emmy Awards nominations</p>
                </div>
               </div>
               <div className='info '>   
                <div className="info--text">
                    <p className="summary--p">A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.
                    </p>
                </div>
                <Image
                className='image' 
                width={750}
                height={850}
                controls={true}
                src="/../public/2.jpg" alt=""  />
                </div>
               
               <Video/>
            
        </div>
       </>
  )
}
