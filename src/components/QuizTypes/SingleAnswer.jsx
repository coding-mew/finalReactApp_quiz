import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import closeModalSound from "../../assets/sounds/closeModal.wav";
import nextQuestionSound from "../../assets/sounds/nextQuestion.wav";
import saveQuestionSound from "../../assets/sounds/saveQuestion.wav";

import { useGameContext } from "../../global/Context";

function AnswerModal({
  currentQuestion,
  answeredCorrect,
  correctAnswerValue,
  handleModalButton,
}) {
  return (
    <div className="modal_overlay">
      <div className="modal_content">
        <h2 className="modal_question"> {currentQuestion.question}</h2>
        {answeredCorrect ? (
          <>
            <p className="correct_answer">Your answer is correct!</p>
          </>
        ) : (
          <>
            <p className="wrong_answer">Wrong..</p>
            <br />
            <p>The correct answer is:</p>
          </>
        )}
        <br />
        <p className="correct_answer">{correctAnswerValue}</p>
        <br />
        <button onClick={handleModalButton}>Close</button>
      </div>
    </div>
  );
}

function SingleAnswer() {
  const {
    gameData,
    setResult,
    setShowNavbar,
    savedQuestions,
    setSavedQuestions,
    isSoundOn,
  } = useGameContext();
  const [showModal, setShowModal] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerText, setSelectedAnswerText] = useState("");
  const [answeredCorrect, setAnsweredCorrect] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(
    gameData[currentQuestionIndex]
  );
  const correctAnswers = Object.values(currentQuestion.correct_answers);
  const indexOfCorrectAnswer = correctAnswers.findIndex(
    (answer) => answer === "true"
  );
  const correctAnswer = Object.entries(currentQuestion.correct_answers).filter(
    ([key, value]) => value === "true"
  );
  const correctAnswerKey = correctAnswer[0][0];
  const correctAnswerValue =
    currentQuestion.answers[correctAnswerKey.replace("_correct", "")];
  const [playSave, { stopSave }] = useSound(saveQuestionSound, { volume: 0.4 });
  const [playNext, { stopNext }] = useSound(nextQuestionSound, { volume: 0.4 });
  const [playCloseModalSound, { stopCloseModalSound }] = useSound(
    closeModalSound,
    { volume: 0.8 }
  );

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("savedQuestions", JSON.stringify(savedQuestions));
  }, [savedQuestions]);

  useEffect(() => {
    setCurrentQuestion(gameData[currentQuestionIndex]);
    if (currentQuestionIndex === gameData.length) {
      navigate("/final_score");
    }
  }, [currentQuestionIndex, gameData.length, navigate]);

  const handleAnswer = (answer) => {
    let keys = Object.keys(currentQuestion.answers);
    let indexOfSelectedAnswer = keys.indexOf(answer);
    //  const handleCorrectAnswer =....
    // const handleWrongAnswer = ...
    // const setUseStates =....
    if (indexOfCorrectAnswer === indexOfSelectedAnswer) {
      setResult((prev) => {
        return {
          ...prev,
          score: prev.score + 10,
          correctAnswers: prev.correctAnswers + 1,
        };
      });
      setSelectedAnswer("");
      setShowNavbar(false);
      setIsCardFlipped(!isCardFlipped);
      setShowModal((prev) => !prev);
      if (isSoundOn) {
        playNext();
      }
      setAnsweredCorrect(true);
    } else {
      setResult((prev) => {
        return {
          ...prev,
          score: prev.score,
          wrongAnswers: prev.wrongAnswers + 1,
        };
      });
      setSelectedAnswer("");
      setShowNavbar(false);
      setIsCardFlipped(!isCardFlipped);
      setShowModal((prev) => !prev);
      if (isSoundOn) {
        playNext();
      }
      setAnsweredCorrect(false);
    }
  };

  const handleSelectChange = (answer) => {
    setSelectedAnswer(answer);
  };
  const handleModalButton = () => {
    setShowModal(false);
    setShowNavbar(true);
    setCurrentQuestionIndex((prev) => {
      return prev + 1;
    });
    if (isSoundOn) {
      playCloseModalSound();
    }
  };
  const saveQuestion = () => {
    setSavedQuestions((prev) => [
      ...prev,
      {
        question: currentQuestion,
        answers: currentQuestion.answers,
        selectedAnswer,
      },
    ]);
    if (isSoundOn) {
      playSave();
    }
  };
  {
    /* random id : crypto.randomUUID() */
  }
  return (
    <div
      className={`card ${isCardFlipped ? "flipped" : ""}`}
      style={{ height: "75vh", marginTop: "15rem", width: "60vw" }}
    >
      <div
        className={`background ${
          showModal ? "background-blur" : "takeQuiz_container"
        }`}
      >
        <div className="question">{currentQuestion.question}</div>
        <div className="answers_container">
          <form>
            {Object.keys(currentQuestion.answers).map((key, index) => {
              if (currentQuestion.answers[key] !== null) {
                const randomID = crypto.randomUUID();
                return (
                  <div key={crypto.randomUUID()} className="answer_single">
                    <input
                      type="radio"
                      className="list_quiz"
                      name="answer"
                      value={currentQuestion.answers[key]}
                      id={randomID}
                      onChange={() => handleSelectChange(key)}
                      checked={selectedAnswer === key ? true : false}
                    />
                    <label
                      className="label_quiz"
                      htmlFor={randomID}
                      key={crypto.randomUUID()}
                    >
                      {currentQuestion.answers[key]}{" "}
                    </label>
                    <br />
                  </div>
                );
              }
            })}
          </form>
          <div className="buttons_singleAnswer_container">
            <button className="save_button" onClick={saveQuestion}>
              Save
            </button>
            <button
              className="next_button"
              onClick={() => {
                handleAnswer(selectedAnswer);
                setSelectedAnswerText(currentQuestion.answers[selectedAnswer]);
              }}
              disabled={selectedAnswer === ""}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <AnswerModal
          currentQuestion={currentQuestion}
          answeredCorrect={answeredCorrect}
          correctAnswerValue={correctAnswerValue}
          handleModalButton={handleModalButton}
        />
      )}
    </div>
  );
}

export default SingleAnswer;
