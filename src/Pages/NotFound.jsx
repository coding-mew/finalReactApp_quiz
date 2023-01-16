import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column" }}>
      <div className="notFoundContent"></div>
      Sorry!
      <br />
      The Page you're looking for can not be found
      <br />
      <Link to="/"> Go to Homepage</Link>
    </div>
  );
}

export default NotFound;
