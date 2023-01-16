import { Navigate } from "react-router-dom";
import ChooseQuiz from "../components/Pages/ChooseQuiz";
import FinalScore from "../components/Pages/FinalScore";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import SavedQuestions from "../Pages/SavedQuestions";

const routes = [
  {
    path: "/",
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
  { path: "*", element: <NotFound />, id: 4 },
  { path: "/", element: <Navigate to="/" />, id: 5 },
  { path: "/finalReactApp_quiz/", element: <Navigate to="/home" />, id: 6 },
  { path: "/quiz/", element: <Navigate to="/" />, id: 7 },
  {
    path: "/final_score",
    element: <FinalScore />,
    id: 8,
  },
  {
    path: "/saved_questions",
    element: <SavedQuestions />,
    id: 9,
  },
  {
    path: "/impressum",
    element: <Impressum />,
    id: 10,
  },
];

export default routes;
