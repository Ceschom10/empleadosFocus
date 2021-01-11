import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import LoginButton from "../../Components/LoginButton";
import LogoutButton from "../../Components/LogoutButton";

function Menu() {
  return (
    <div>
      <AppBar position="static">
        <ul>
          <li>
            <Link to="/" className="link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/empleados" className="link">
              Empleados
            </Link>
          </li>
          <li>
            <Link to="/incapacidades" className="link">
              Incapacidades
            </Link>
          </li>
          <li>
            <LoginButton />
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </AppBar>
    </div>
  );
}

export default Menu;
