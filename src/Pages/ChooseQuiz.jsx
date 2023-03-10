import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import generateQuizSound from "../assets/sounds/generateQuiz.wav";
import { useGameContext } from "../global/Context";

function ChooseQuiz() {
  // const [quizData, setQuizData] = useState([]);
  const [topic, setTopic] = useState("JavaScript");
  const [amountQuestions, setAmountQuestions] = useState(5);
  const { gameData, setGameData, setShowNavbar, isSoundOn } = useGameContext();
  const navigateToQuiz = useNavigate();

  const [play, { stop }] = useSound(generateQuizSound, { volume: 0.1 });

  const fetchingData = async () => {
    await axios.get(url).then(async (res) => {
      await setGameData(res.data);
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
    }
    navigateToQuiz("/quiz");
  };
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${amountQuestions}&tags=${topic}`;
  return (
    <div className="card">
      <div className="choose_quiz_container">
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="topic">Choose your Topic:</label>
          <select id="topic" onChange={(e) => setTopic(e.target.value)}>
            <option value="JavaScript">JavaScript</option>
            <option value="HTML">HTML</option>
            {/* <option value="MySQL">MySQL</option>
            <option value="Linux">Linux</option>
            <option value="PHP">PHP</option>
            <option value="Linux">Linux</option> */}

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
            {/* <option value="15">15</option>
            <option value="20">20</option> */}
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
