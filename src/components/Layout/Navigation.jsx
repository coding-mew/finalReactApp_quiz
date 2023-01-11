import React from 'react'
import { NavLink } from "react-router-dom";

function Navigation() {
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
            name: "Final",
            to: "/final_score",
            id: 3,
          },
          {
              name: "Not Found",
              to: "*",
              id: 4,
            }
  ];
  return (
    <>
      <header>
        <nav className="nav_container">
            <ul>
           {items.map(item=><li key={item.id}> <NavLink to={item.to}>{item.name}</NavLink></li>)}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navigation;


