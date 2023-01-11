import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChooseQuiz from "./Pages/ChooseQuiz";
import HomePage from "./Pages/HomePage";
import Layout from "./components/Layout/Layout";
import Quiz from "./Pages/Quiz";
import FinalScore from "./Pages/FinalScore";
import NotFound from "./Pages/NotFound";
import { GameContextProvider } from "./global/Context";

function App() {

  return (
    <>
      <GameContextProvider>
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
      </GameContextProvider>
      <div className="App"></div>
    </>
  );
}

export default App;
