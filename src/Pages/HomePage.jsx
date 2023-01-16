import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import { useGameContext } from "../global/Context";
import startSound from '../assets/sounds/mixkit-sci-fi-construction-complete-811.wav'

function HomePage() {
  const { showNavbar, setShowNavbar, isSoundOn, setIsSoundOn } =
    useGameContext();


  const [play, { stop }] = useSound(startSound, { volume: 0.3 });

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
  // play();

  return (
    <div className="home_container">
      <h1 data-text="Enter the Quiz Universe" className="home_animation">
        <span onClick={handleEnterClick}>Enter the Quiz Universe</span>
      </h1>
    </div>
  );
}
export default HomePage;
