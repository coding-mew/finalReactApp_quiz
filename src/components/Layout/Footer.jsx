import React, { useState } from 'react';
import { GiSoundOn, GiSoundOff } from "react-icons/gi"
import useSound from 'use-sound'


function Footer() {
  const soundUrl = '../../src/assets/sounds/monk-chant-fantasy-23137.mp3'
  const [play, { stop }] = useSound(
    soundUrl,
    { volume: 0.1 }
  );

  const [isSoundOn, setIsSoundOn] = useState(false);

  function handleSoundClick() {
    if (isSoundOn) {
      stop();
      setIsSoundOn(false);
    } else {
      play();
      setIsSoundOn(true);
    }
  }

  return (
    <footer>
      <p className="footer_sound_icons">
        {isSoundOn ? (
          <GiSoundOff onClick={handleSoundClick}/>
        ) : (
          <GiSoundOn onClick={handleSoundClick}/>
        )}
      </p>
    </footer>
  )
}

export default Footer
