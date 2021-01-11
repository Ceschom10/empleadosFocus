import React from "react";
import FormIncapacidades from "./Form";
import ListIncapacidades from "./List";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import UsersProvider from "../APIFetching/Context";

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
        <Grid item xs>
          <Paper className={classes.paper}>
              <ListIncapacidades />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <FormIncapacidades />
          </Paper>
        </Grid>
      </Grid>
      </UsersProvider>
    </div>
  );
}

export default APIFetchingIncapacidades;
