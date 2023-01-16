import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../global/Context";
import useSound from "use-sound";
import generateQuizSound from '../assets/sounds/generateQuiz.wav'


function ChooseQuiz() {
  // const [quizData, setQuizData] = useState([]);
  const [topic, setTopic] = useState("JavaScript");
  const [amountQuestions, setAmountQuestions] = useState(5);
  const { gameData, setGameData, showNavbar, setShowNavbar, isSoundOn } = useGameContext();
  const navigateToQuiz = useNavigate();

  const [play, { stop }] = useSound(generateQuizSound, { volume: 0.3 });

  const fetchingData = async () => {
    await axios.get(url).then(async (res) => {
      await setGameData(res.data);
      //  await setGameData(quizData);
    });
  };
  useEffect(() => {
    setShowNavbar(true);
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchingData();
    if (isSoundOn) {
      play();
      // setIsSoundOn(false);
    }
    navigateToQuiz("/quiz");
  };
  console.log(gameData);

  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${amountQuestions}&tags=${topic}`;
  console.log(url);
  return (
    <div className="card">
      <div className="choose_quiz_container">
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="topic">Choose your Topic:</label>
          <select id="topic" onChange={(e) => setTopic(e.target.value)}>
            <option value="JavaScript">JavaScript</option>
            <option value="HTML">HTML</option>
            <option value="MySQL">MySQL</option>
            <option value="Bash">Bash</option>
          </select>
          <br />
          <br />
          <label htmlFor="questionsAmount">How many questions?</label>
          <select
            id="questionsAmount"
            onChange={(e) => setAmountQuestions(e.target.value)}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <br />
          <button className="generateQuiz" type="submit">
            Generate your Quiz
          </button>
        </form>
      </div>
    </div>
  );
}
export default ChooseQuiz;
