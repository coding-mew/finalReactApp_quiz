import React from "react";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import useSound from "use-sound";
import { useGameContext } from "../../global/Context";
import startsong from '../../assets/sounds/monk-chant-fantasy-23137.mp3'

function Footer() {

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
