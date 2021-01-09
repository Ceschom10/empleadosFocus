import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";


function Menu() {
  return (
    <div>
      <AppBar position="static">
        <ul>
          <li>
            <Link to="/" className="link">Empleados</Link>
          </li>
          <li>
            <Link to="/incapacidades" className="link">Incapacidades</Link>
          </li>
        </ul>
      </AppBar>
    </div>
  );
}

export default Menu;
