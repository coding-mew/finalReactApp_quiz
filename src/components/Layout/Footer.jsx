import React from "react";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import useSound from "use-sound";
import { useGameContext } from "../../global/Context";
// import { start} from '../../assets/sounds/start'
import startsong from './monk-chant-fantasy-23137.mp3'

function Footer() {
  // const soundUrl = "../../assets/sounds/monk-chant-fantasy-23137.mp3";
  // const soundUrl2 ='../../assets/sounds/start.wav'
  // const soundUrl3 = './monk-chant-fantasy-23137.mp3'

  const [play, { stop }] = useSound(startsong, { volume: 0.3 });

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
