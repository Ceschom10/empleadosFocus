import React, { useContext } from "react";
import { db } from "../../../Firebase/firebase";
import { UsersContext } from "../../APIFetching/Context";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import swal from "sweetalert";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonMod: {
    margin: theme.spacing(1),
    width: 20,
    background: "#2dd36f",
    color: "black",
  },
  buttonElim: {
    margin: theme.spacing(1),
    width: 20,
    background: "#eb445a",
    color: "black",
  },
  icon: {
    fontSize: 25,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function RowIncapacidades({ incapacidad }) {
  const {
    incapacidades: [, setIncapacidades],
    currentIncapacidades: [, setCurrentIncapacidades],
  } = useContext(UsersContext);

  const deleteUser = (incapacidad) => {
    swal({
      title: "Eliminar",
      text: "Estas seguro que deseas eliminar la incapacidad?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        eliminar(incapacidad);
        swal({
          text: "El archivo se ha borrado con exito",
          icon: "success",
          timer: 1000,
        });
      }
    });
  };

  const eliminar = async (incapacidad) => {
    await db.collection("incapacidades").doc(incapacidad.id).delete();
    console.log("Empleado eliminado");

    setIncapacidades(function (currentIncapacidades) {
      return currentIncapacidades.filter((currentIncapacidades) => {
        return currentIncapacidades.codigo !== incapacidad.codigo;
      });
    });
  };

  const classes = useStyles();

  return (
    <StyledTableRow key={incapacidad.id}>
      <StyledTableCell align="right">{incapacidad.codigo}</StyledTableCell>
      <StyledTableCell align="right">
        {incapacidad.fechaIngreso}
      </StyledTableCell>
      <StyledTableCell align="right">
        {incapacidad.unidadMedica}
      </StyledTableCell>
      <StyledTableCell align="right">{incapacidad.doctor}</StyledTableCell>
      <StyledTableCell align="right">
        {incapacidad.inicioIncapacidad}
      </StyledTableCell>
      <StyledTableCell align="right">
        {incapacidad.finIncapacidad}
      </StyledTableCell>
      <StyledTableCell align="right">
        {incapacidad.diasCobertura}
      </StyledTableCell>
      <StyledTableCell align="right">
        <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonMod}
          onClick={() => setCurrentIncapacidades(incapacidad)}
        >
          {<CreateIcon className={classes.buttonMod} />}
        </Button>
        </div>
        <div>
        <Button
          className={classes.buttonElim}
          variant="contained"
          color="primary"
          onClick={() => deleteUser(incapacidad)}
        >
          {<DeleteIcon className={classes.buttonElim}/>}
        </Button>
        </div>
        
       
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default RowIncapacidades;
