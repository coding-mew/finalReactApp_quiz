import React, {useRef, useEffect} from "react";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import useSound from "use-sound";
import { useGameContext } from "../../global/Context";
import startsong from '../../assets/sounds/monk-chant-fantasy-23137.mp3'
import radiowavesSound from '../../assets/sounds/Radio_Waves_Earth_Magnetosphere.mp3'

function Footer() {

  // const [play, { stop }] = useSound(startsong, { volume: 0.3 });
  const [playRadiowaves, { stopRadiowaves }] = useSound(radiowavesSound, { volume: 0.3 });


  const { isSoundOn, setIsSoundOn } = useGameContext();

  function handleSoundClick() {
    if (isSoundOn) {
      stop();
      setIsSoundOn(false);
    } else {
      play();
      setIsSoundOn(true);
    }
  }
  const audioRef = useRef(null);
const [play, { stop }] = useSound(startsong, {
  volume: 0.3,
  ref: audioRef
});

useEffect(() => {
  if (audioRef.current) {
    audioRef.current.addEventListener("ended", () => {
      play();
    });
  }
}, [audioRef, play]);

  return (
    <footer>
      <p className="footer_sound_icons">
        {isSoundOn ? (
          <GiSoundOff onClick={handleSoundClick} />
        ) : (
          <GiSoundOn onClick={handleSoundClick} />
        )}
      </p>
    </footer>
  );
}

export default Footer;
