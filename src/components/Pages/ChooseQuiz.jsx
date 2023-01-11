import React, { useContext, useState } from "react";
import { GameContext, GameContextProvider } from "../../global/Context";
import axios from "axios";

function ChooseQuiz() {
  // const {gameData, setGameData} = useContext(GameContext)
  const [quizData, setQuizData] = useState([]);
  const [topic, setTopic] = useState("JavaScript");
  const [level, setLevel] = useState("Easy");
  const [amountQuestions, setAmountQuestions] = useState(10);

  //onsubmithandler -> fetch -> fragen -> use context mit setGameData
  // console.log(gameData);
  const onSubmitHandler = () => {
    e.preventDefault();

    // set APIkey private (see .env file for details)
    const apiKey = import.meta.env.VITE_API_KEY;
    // console.log(apiKey);
    // get topic and level by user input select
    const url = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&difficulty=${level}&limit=${amountQuestions}&tags=${topic}`;
    console.log(url);
    const fetchingData = () => {
      axios.get(url).then((res) => {
        setQuizData(res.data);
      });
    };
    useEffect(() => {
      fetchingData();
    }, []);
  };
  return (
    <div className="card">
      <div className="choose_quiz_container">
        <form>
          <label htmlFor="topic">Choose your Topic</label>
          <select id="topic" onChange={(e) => setTopic(e.target.value)}>
            <option value="JavaScript">JavaScript</option>
            <option value="HTML">HTML</option>
            <option value="MySQL">MySQL</option>
            <option value="Bash">Bash</option>
          </select>
          <br />
          <label htmlFor="level">Choose your Level</label>

          <select id="level" onChange={(e) => setLevel(e.target.value)}>
            <option value="Easy">Easy</option>
            <option value="Medium">Intermediate</option>
            <option value="Hard">Advanced</option>
          </select>
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
          <button
            className="generateQuiz"
            type="submit"
            onSubmit={onSubmitHandler}
          >
            Generate your Quiz
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChooseQuiz;
