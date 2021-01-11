import { React, useState } from "react";
import { useForm } from "react-hook-form";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
    width: 110,
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

  const { register, handleSubmit, reset, errors } = useForm({
    defaultValues,
  });

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          
            <div>
              <input
                type="text"
                name="id"
                placeholder="id"
                ref={register()}
                readOnly="ReadOnly"
                className="oculto"
              />
            </div>
              <div>
                <InputLabel htmlFor="input-with-icon-adornment">
                  CODIGO EMPLEADO
                </InputLabel>
                <label>{<AccountCircleIcon color="primary" />}</label>
                <input
                  type="number"
                  name="codigo"
                  placeholder="codigo"
                  ref={register({ required: true, maxLength: 10 })}
                />
              </div>
              <div>
              {errors.codigo && errors.codigo.type === "required" && (
                  <span>*Campo requerido</span>
                )}
                 {errors.codigo && errors.codigo.type === "maxLength:" && (
                <span>Maximo 50</span>
              )}
              </div>
              <div>
              <InputLabel htmlFor="input-with-icon-adornment">
                NOMBRE
              </InputLabel>
              <label>{<AccountCircleIcon color="primary" />}</label>
              <input
                type="text"
                name="nombre"
                placeholder="nombre"
                ref={register({ required: true, maxLength:50 })}
              />
            </div>
            <div>
            {errors.nombre && errors.nombre.type === "required" && (
                <span>*Campo requerido</span>
              )}
              {errors.nombre && errors.nombre.type === "maxLength" && (
                <span>Maximo 50</span>
              )}
            </div>
            <div>
              <InputLabel htmlFor="input-with-icon-adornment">
                Puesto
              </InputLabel>
              <label>{<AccountCircleIcon color="primary" />}</label>
              <input
                type="text"
                name="puesto"
                placeholder="puesto"
                ref={register({ required: true, maxLength: 50 })}
              />
            </div>
            <div>
            {errors.puesto && errors.puesto.type === "required" && (
                <span>*Campo requerido</span>
              )}
              {errors.puesto && errors.puesto.type === "maxLength" && (
                <span>Maximo 50</span>
              )}
            </div>
        </Grid>
        <Grid item xs={12} sm={6}>
            <div>
              <InputLabel htmlFor="input-with-icon-adornment">
                FECHA DE INGRESO
              </InputLabel>
              <label>{<AccountCircleIcon color="primary" />}</label>
              <input
                type="date"
                name="fechaIngreso"
                placeholder="fecha de ingreso"
                className="fecha"
                ref={register({ required: true })}
              />
            </div>
            <div>
            {errors.fechaIngreso && errors.fechaIngreso.type === "required" && (
                <span>* campo requerido</span>
              )}
            </div>

            <div>
              <InputLabel htmlFor="input-with-icon-adornment">DUI</InputLabel>
              <label>{<AccountCircleIcon color="primary" />}</label>
              <input
                type="number"
                name="dui"
                placeholder="dui"
                ref={register({ required: true, maxLength: 10 })}
              />
            </div>
            <div>
            {errors.dui && errors.dui.type === "required" && (
                <span>*Campo requerido</span>
              )}
              {errors.dui && errors.dui.type === "maxLength" && (
                <span>Formato ########-#</span>
              )}
            </div>
          
        </Grid>
      </Grid>

      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SaveIcon />}
          type="submit"
        >
          Enviar
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          endIcon={<DeleteIcon />}
          type="reset"
          onClick={() => reset()}
        >
          Reset
        </Button>
      </div>
    </form>
  );
}

export default FormLayout;
