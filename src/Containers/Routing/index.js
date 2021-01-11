import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Inicio from "../../Components/inicio";
import APIFetching from "../APIFetching";
import APIFetchingIncapacidades from "../APIFetchingIncapacidades";
import Menu from "./Menu";
import PrivateRoute from "./PrivateRoute"


function Routing() {
  
  return (
      <div>
      <HashRouter>
        <Menu/>
        <Switch>
          <Route exact path="/">
            <Inicio/>
          </Route>
          <PrivateRoute path="/empleados">
            <APIFetching />
          </PrivateRoute>
          <PrivateRoute path="/incapacidades">
            <APIFetchingIncapacidades />
          </PrivateRoute>
        </Switch>
      </HashRouter>
    </div>

  );
  }

export default Routing;
