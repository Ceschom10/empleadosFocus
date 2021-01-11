import React from "react";
import UsersProvider from "./Context";
import Form from "./Form";
import List from "./List";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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

function APIFetchingIncapacidades() {
  const classes = useStyles();
  return (
    <div className="App-form-users">
      <UsersProvider>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <List />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
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
