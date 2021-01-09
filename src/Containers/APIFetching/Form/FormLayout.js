import React from "react";
import { useForm } from "react-hook-form";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InputLabel from "@material-ui/core/InputLabel";
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

function FormLayout({ onSubmit, currentValues }) {
  const defaultValues = {
    ...currentValues,
  };

  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <p>
              <InputLabel htmlFor="input-with-icon-adornment">ID</InputLabel>
              <label>{<AccountCircleIcon color="primary" />}</label>
              <input type="text" name="id" placeholder="id" ref={register()} readonly="readonly"/>
            </p>
            <p>
              <InputLabel htmlFor="input-with-icon-adornment">
                NOMBRE
              </InputLabel>
              <label>{<AccountCircleIcon color="primary" />}</label>
              <input
                type="text"
                name="nombre"
                placeholder="nombre"
                ref={register()}
              />
            </p>
            <p>
              <InputLabel htmlFor="input-with-icon-adornment">
                PUESTO
              </InputLabel>
              <label>{<AccountCircleIcon color="primary" />}</label>
              <input
                type="text"
                name="puesto"
                placeholder="puesto"
                ref={register()}
              />
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <p>
              <InputLabel htmlFor="input-with-icon-adornment">
                CODIGO EMPLEADO
              </InputLabel>
              <label>{<AccountCircleIcon color="primary" />}</label>
              <input
                type="number"
                name="codigo"
                placeholder="codigo"
                ref={register()}
              />
            </p>

            <p>
              <InputLabel htmlFor="input-with-icon-adornment">
                FECHA INGRESO
              </InputLabel>
              <label>{<AccountCircleIcon color="primary" />}</label>
              <input
                type="text"
                name="fechaIngreso"
                placeholder="fecha de ingreso"
                ref={register()}
              />
            </p>
            <p>
              <InputLabel htmlFor="input-with-icon-adornment">DUI</InputLabel>
              <label>{<AccountCircleIcon color="primary" />}</label>
              <input
                type="text"
                name="dui"
                placeholder="dui"
                ref={register()}
              />
            </p>
          </Paper>
        </Grid>
      </Grid>

      <p>
        <input type="submit" className="enviar-color" />
        <button type="reset" className="reset-color" onClick={() => reset()}>
          Reset
        </button>
      </p>
    </form>
  );
}

export default FormLayout;
