import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChooseQuiz from "./components/Pages/ChooseQuiz";
import HomePage from "./components/Pages/HomePage";
// import About from './components/About'
// import Homepage from './components/Homepage'
import Layout from "./components/Layout/Layout";
import Quiz from "./components/Pages/Quiz";
import FinalScore from "./components/Pages/FinalScore";
import NotFound from "./components/Pages/NotFound";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [topic, setTopic] = useState("JavaScript");
  const [quizData, setQuizData] = useState([]);
  // set APIkey private (see .env file for details)
  const apiKey = import.meta.env.VITE_API_KEY;
  // console.log(apiKey);
  // get topic and level by user input select
  const url = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=20&tags=${topic}`;
console.log(url);
  const fetchingData = () => {
    axios.get(url).then((res) => {
      setQuizData(res.data);
    });
  };
  useEffect(() => {
    fetchingData();
  }, []);
  
  console.log(quizData);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/choose_quiz" element={<ChooseQuiz />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/final_score" element={<FinalScore />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <div className="App"></div>
    </>
  );
}

export default App;
