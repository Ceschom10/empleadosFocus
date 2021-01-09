import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import APIFetching from "../APIFetching";
import APIFetchingIncapacidades from "../APIFetchingIncapacidades";
import Menu from "./Menu";


function Routing() {
  
  return (
      <div>
      <HashRouter>
        <Menu/>
        <Switch>
          <Route exact path="/">
            <APIFetching />
          </Route>
          <Route path="/incapacidades">
            <APIFetchingIncapacidades />
          </Route>
        </Switch>
      </HashRouter>
    </div>

  );
  }

export default Routing;
