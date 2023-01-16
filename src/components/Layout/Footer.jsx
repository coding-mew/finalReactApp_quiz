import React from "react";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import useSound from "use-sound";
import { useGameContext } from "../../global/Context";

function Footer() {
  const soundUrl = "../../assets/sounds/monk-chant-fantasy-23137.mp3";
  const soundUrl2 = "../../assets/sounds/mixkit-sci-fi-device-pulsations-884.wav";

  const [play, { stop }] = useSound(soundUrl, { volume: 0.1 });

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
