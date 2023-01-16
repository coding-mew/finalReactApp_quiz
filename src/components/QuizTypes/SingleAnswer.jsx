import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../global/Context";

function SingleAnswer() {
  const {
    gameData,
    result,
    setResult,
    showNavbar,
    setShowNavbar,
    savedQuestions,
    setSavedQuestions,
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

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentQuestion(gameData[currentQuestionIndex]);
    if (currentQuestionIndex === gameData.length) {
      navigate("/final_score");
    }
  }, [currentQuestionIndex, gameData.length, navigate]);

  const handleAnswer = (answer) => {
    let keys = Object.keys(currentQuestion.answers);
    let indexOfSelectedAnswer = keys.indexOf(answer);
    if (indexOfCorrectAnswer === indexOfSelectedAnswer) {
      setResult((prev) => {
        return {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1,
        };
      });
      setSelectedAnswer("");
      setAnsweredCorrect(true);
      setShowNavbar(false);
      setIsCardFlipped(!isCardFlipped);
      setShowModal((prev) => !prev);
    } else {
      setResult((prev) => {
        return {
          ...prev,
          score: prev.score,
          wrongAnswers: prev.wrongAnswers + 1,
        };
      });
      setSelectedAnswer("");
      setAnsweredCorrect(false);
      setShowNavbar(false);
      setIsCardFlipped(!isCardFlipped);
      setShowModal((prev) => !prev);
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
  };
  const saveQuestion = () => {
    setSavedQuestions(
      (prev) => [
        ...prev,
        {
          question: currentQuestion,
          answers: currentQuestion.answers,
          selectedAnswer,
        },
      ],
    );
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
              Save Question
            </button>
            <button
              className="next_button"
              onClick={() => {
                handleAnswer(selectedAnswer);
                setSelectedAnswerText(currentQuestion.answers[selectedAnswer]);
              }}
              disabled={selectedAnswer === ""}
            >
              Next Question
            </button>
          </div>
        </div>
      </div>
      {showModal && (
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
      )}
    </div>
  );
}

export default SingleAnswer;
