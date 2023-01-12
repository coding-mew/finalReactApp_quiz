// export default items = [
//     {
//       name: "Home",
//       to: "/",
//       id: 0,
//     },
//     {
//         name: "Choose a Quiz",
//         to: "/choose_quiz",
//         id: 1,
//       }
//   ];

import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import ChooseQuiz from "../components/Pages/ChooseQuiz";
import FinalScore from "../components/Pages/FinalScore";

const routes = [
  {
    path: "/home",
    element: <HomePage />,
    id: 1,
  },
  {
    path: "/take_quiz",
    element: <Quiz />,
    id: 2,
  },
  {
    path: "/choose_quiz",
    element: <ChooseQuiz />,
    id: 3,
  },
  // default 404
  { path: "*", element: <NotFound />, id: 4 },
  // leitet von / nach /home
  { path: "/", element: <Navigate to="home" />, id: 5 },
  //  ???
  { path: "/finalReactApp_quiz/", element: <Navigate to="home" />, id: 6 },
  { path: "/quiz/", element: <Navigate to="home" />, id: 7 },


  {
    path: "/final_score",
    element: <FinalScore />,
    id: 8,
  }
];

export default routes;
