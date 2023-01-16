import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import startSound from "../assets/sounds/start.wav";
import { useGameContext } from "../global/Context";

function HomePage() {
  const { setShowNavbar, isSoundOn} =
    useGameContext();

  const [play, { stop }] = useSound(startSound, { volume: 0.3 });

  const navigate = useNavigate();

  useEffect(() => {
    setShowNavbar(false);
  });

  const handleEnterClick = () => {
    if (isSoundOn) {
      play();
    }
    navigate("/choose_quiz");
  };
  return (
    <div className="home_container">
      <h1 data-text="Enter the Quiz Universe" className="home_animation">
        <span onClick={handleEnterClick}>Enter the Quiz Universe</span>
      </h1>
    </div>
  );
}
export default HomePage;
