import React from "react";
import ReactPlayer from 'react-player'

const Video= () => {
          return (
            <div className="p-wrapper">
            <h1>Watch Trailer</h1>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=HhesaQXLuRY'
                width='100%'
                height='100%'
              />
            </div>
            </div>
          )
        }
export default Video