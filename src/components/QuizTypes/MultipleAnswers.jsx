import React from "react";

function MultipleAnswers() {
  return <div>MultipleAnswers</div>;
}

export default MultipleAnswers;
// ) : (
// <>
//   <div className="card" style={{ height: "75vh", marginTop: "15rem" }}>
//     <div className="takeQuiz_container">
//       <div className="question">{currentQuestion.question}</div>

//       <form>
//         {Object.keys(currentQuestion.answers).map((key) => {
//           if (currentQuestion.answers[key] !== null) {
//             return (
//               <>
//                 <div className="answers_container">
//                   <div className="answer_single">
//                     <input
//                       type="checkbox"
//                       className="list_quiz"
//                       name="answer"
//                       value={currentQuestion.answers[key]}
//                     />
//                     <label
//                       className="label_quiz"
//                       htmlFor={currentQuestion.answers[key]}
//                     >
//                       <br />

//                       {currentQuestion.answers[key]}
//                     </label>
//                   </div>
//                 </div>
//               </>
//             );
//           }
//         })}
//         <input
//           type="submit"
//           value="Next"
//           onClick={() => handleAnswer(answer)}
//         />
//       </form>
//     </div>
//   </div>
// </>
