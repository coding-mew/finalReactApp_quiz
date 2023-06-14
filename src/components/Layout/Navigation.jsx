import React from "react";
import { NavLink } from "react-router-dom";
import { useGameContext } from "../../global/Context";

function Navigation() {
  const { showNavbar } = useGameContext();

  const items = [
    {
      name: "Home",
      to: "/",
      id: 0,
    },
    {
      name: "Choose Quiz",
      to: "/choose_quiz",
      id: 1,
    },
    {
      name: "Quiz",
      to: "/quiz",
      id: 2,
    },
    {
      name: "Score",
      to: "/final_score",
      id: 3,
    },
    {
      name: "Saved",
      to: "/saved_questions",
      id: 4,
    },
    // {
    //   name: "Not Found",
    //   to: "*",
    //   id: 5,
    // },
  ];
  return showNavbar ? (
    <header>
      <nav className="nav_container">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {" "}
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  ) : null;
}

export default Navigation;
