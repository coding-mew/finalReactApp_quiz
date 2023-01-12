import React, {useState} from 'react'
import useSound from 'use-sound'
import Radio_Waves_Earth_Magnetosphere from '../../src/assets/sounds/Radio_Waves_Earth_Magnetosphere.mp3'

function HomePage() {
  const soundUrl = '../../src/assets/sounds/Radio_Waves_Earth_Magnetosphere.mp3'
  const [play, { stop }] = useSound(
    soundUrl,
    { volume: 0.5 }
  );
  const [isHovering, setIsHovering] =useState(
    false
  );

  return (

       <div className="Homepage" onMouseEnter={() => {
        setIsHovering(true);
        play();
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        stop();
      }}>
      <h1 data-text="Enter the Quiz Universe" className="home_animation" 
      >
       
       <span>Enter the Quiz Universe</span>
     
       </h1>
    </div>
  )
}

export default HomePage