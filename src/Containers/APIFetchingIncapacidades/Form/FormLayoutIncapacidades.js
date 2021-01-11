import React from "react";
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
  button:{
    margin: theme.spacing(1),
    width: 110,
},
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function FormLayoutIncapacidades({ onSubmit, currentValues }) {

  const defaultValues = {
    ...currentValues,
  };

  const { register, handleSubmit, reset, errors } = useForm({
    defaultValues,
  });

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item xs={12} >
          
         
          <div>
              <input
                type="text"
                name="id"
                readOnly="readOnly"
                className="oculto"
                ref={register()}
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
              {errors.codigo && errors.codigo.type === "maxLength" && (
                <span>Maximo 10</span>
              )}
            </div>
            <div>
              <InputLabel htmlFor="input-with-icon-adornment">
                FECHA INGRESO
              </InputLabel>
              <label>{<AccountCircleIcon color="primary" />}</label>
              <input
                type="date"
                name="fechaIngreso"
                placeholder="fecha de ingreso"
                className="fecha"
                ref={register({ required: true})}
              />
            </div>
            <div>
            {errors.fechaIngreso && errors.fechaIngreso.type === "required" && (
                <span>*Campo requerido</span>
              )}
            </div>
            
            <div>
              <InputLabel htmlFor="input-with-icon-adornment">
                UNIDAD MEDICA
              </InputLabel>
              <label>{<AccountCircleIcon color="primary" />}</label>
              <input
                type="text"
                name="unidadMedica"
                placeholder="unidad medica"
                ref={register({ required: true, maxLength: 50 })}
              />
            </div>
            <div>
            {errors.unidadMedica && errors.unidadMedica.type === "required" && (
                <span>*Campo requerido</span>
              )}
              {errors.unidadMedica && errors.unidadMedica.type === "maxLength" && (
                <span>Maximo 50</span>
              )}
            </div>
            <div>
              <InputLabel htmlFor="input-with-icon-adornment">
                DOCTOR
              </InputLabel>
              <label>{<AccountCircleIcon color="primary" />}</label>
              <input
                type="text"
                name="doctor"
                placeholder="doctor"
                ref={register({ required: true, maxLength: 50 })}
              />
            </div>
            <div>
            {errors.doctor && errors.doctor.type === "required" && (
                <span>*Campo requerido</span>
              )}
              {errors.doctor && errors.doctor.type === "maxLength" && (
                <span>Maximo 50</span>
              )}
            </div>
            <div>
              <InputLabel htmlFor="input-with-icon-adornment">
                INICIO INCAPACIDAD
              </InputLabel>
              <label>{<AccountCircleIcon color="primary" />}</label>
              <input
                type="date"
                name="inicioIncapacidad"
                placeholder="inicio de incapacidad"
                className="fecha"
                ref={register({ required: true })}
              />
              <div>
            {errors.inicioIncapacidad && errors.inicioIncapacidad.type === "required" && (
                <span>*Campo requerido</span>
              )}
            </div>
               
            </div>
            <div>
              <InputLabel htmlFor="input-with-icon-adornment">
                FIN INCAPACIDAD
              </InputLabel>
              <label>{<AccountCircleIcon color="primary" />}</label>
              <input
                type="date"
                name="finIncapacidad"
                placeholder="fin de incapacidad"
                className="fecha"
                ref={register({ required: true})}
              />
              <div>
            {errors.finIncapacidad && errors.finIncapacidad.type === "required" && (
                <span>*Campo requerido</span>
              )}
            </div>
               
            </div>
            <div>
              <InputLabel htmlFor="input-with-icon-adornment">
                DIAS DE COBERTURA
              </InputLabel>
              <label>{<AccountCircleIcon color="primary" />}</label>
              <input
                type="number"
                name="diasCobertura"
                placeholder="dias de cobertura"
                ref={register({ required: true, maxLength: 3 })}
              />
            </div>
            <div>
            {errors.diasCobertura && errors.diasCobertura.type === "required" && (
                <span>*Campo requerido</span>
              )}
              {errors.diasCobertura && errors.diasCobertura.type === "maxLength" && (
                <span>Maximo 3</span>
              )}
            </div>
         
        </Grid>
      </Grid>
      
     
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SaveIcon/>}
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

export default FormLayoutIncapacidades;
