import React from "react";
import "./Navbar.css";

//components
import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav id="nav">
      <Link to={"/"}>ReactGram</Link>
      <form>
        <BsSearch />
        <input type="text" />
      </form>
      <ul id="nav-links">
        <NavLink to={"/"}>
          <BsHouseDoorFill />
        </NavLink>
        <NavLink to={"/login"}>Entrar</NavLink>
        <NavLink to={"/register"}>Cadastrar</NavLink>
      </ul>
    </nav>
  );
};