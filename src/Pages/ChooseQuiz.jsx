import axios from "axios";
import React, { useState } from "react";
import { useGameContext } from "../global/Context";

function ChooseQuiz() {
  const [quizData, setQuizData] = useState([]);
  const [topic, setTopic] = useState("JavaScript");
  const [level, setLevel] = useState("Easy");
  const [amountQuestions, setAmountQuestions] = useState(5);
  const {gameData, setGameData} = useGameContext()


  const fetchingData = async () => {
    await axios.get(url).then((res) => {
      setQuizData(res.data);
      setGameData(quizData);
    });
  };
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchingData();
    
  };
console.log(gameData)
  // set APIkey private (see .env file for details)

  const apiKey = import.meta.env.VITE_API_KEY;


  const url = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${amountQuestions}&tags=${topic}`;
  
  console.log(url);

  return (
    <div className="card">
      <div className="choose_quiz_container">
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="topic">Choose your Topic</label>
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