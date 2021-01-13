import React from "react";
import UsersProvider from "./Context";
import Form from "./Form";
import List from "./List";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 25, 
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: 95,
    justifyContent: "center"
  },
}));

function APIFetchingIncapacidades() {
  const classes = useStyles();
  return (
    <div className="App-form-users">
      <UsersProvider>
        <Grid container spacing={2} className={classes.root} >
          <Grid item >
            <Paper className={classes.paper}>
              <List/>
            </Paper>
          </Grid>
          <Grid item >
            <Paper className={classes.paper}>
              <Form />
            </Paper>
          </Grid>
        </Grid>
      </UsersProvider>
    </div>
  );
}

export default APIFetchingIncapacidades;
