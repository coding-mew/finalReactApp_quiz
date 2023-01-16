import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import { useGameContext } from "../global/Context";

function HomePage() {
  const { showNavbar, setShowNavbar, isSoundOn, setIsSoundOn } =
    useGameContext();
  const soundUrl = "../assets/sounds/monk-chant-fantasy-23137.mp3";
  console.log("🚀 ~ file: HomePage.jsx:12 ~ HomePage ~ soundUrl", soundUrl);

  const [play, { stop }] = useSound(soundUrl, { volume: 0.8 });

  const navigate = useNavigate();

  useEffect(() => {
    setShowNavbar(false);
  });

  const handleEnterClick = () => {
    if (isSoundOn) {
      play();
      // setIsSoundOn(false);
    }
    navigate("/choose_quiz");
  };
  play();

  return (
    <div className="home_container">
      <h1 data-text="Enter the Quiz Universe" className="home_animation">
        <span onClick={handleEnterClick}>Enter the Quiz Universe</span>
      </h1>
    </div>
  );
}
export default HomePage;
