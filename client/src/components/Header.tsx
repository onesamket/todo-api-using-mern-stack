import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex h-20 justify-evenly items-center shadow-md">
      <div>Todos</div>
      <div>
        <ul className=" flex space-x-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/auth">Signin</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
