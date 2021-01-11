import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import LoginButton from "../../Components/LoginButton";
import LogoutButton from "../../Components/LogoutButton";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Menu() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
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
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Menu;
