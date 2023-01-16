import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { GameContextProvider } from "./global/Context";
import ChooseQuiz from "./Pages/ChooseQuiz";
import FinalScore from "./Pages/FinalScore";
import HomePage from "./Pages/HomePage";
import Impressum from "./Pages/Impressum";
import NotFound from "./Pages/NotFound";
import Quiz from "./Pages/Quiz";
import SavedQuestions from "./Pages/SavedQuestions";


function App() {
  return (
    <>
      <HashRouter>
        <GameContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/choose_quiz" element={<ChooseQuiz />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/final_score" element={<FinalScore />} />
              <Route path="/saved_questions" element={<SavedQuestions/>} />
              <Route path="/impressum" element={<Impressum/>} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Layout>
        </GameContextProvider>
      </HashRouter>
      <div className="App"></div>
    </>
  );
}

export default App;
