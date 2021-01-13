import React, { useContext } from "react";
import { db } from "../../../Firebase/firebase";
import { UsersContext } from "../Context";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { useHistory } from "react-router-dom";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import swal from "sweetalert";

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

function Row({ user }) {
  const {
    users: [, setUsers],
    current: [current, setCurrent],
    currentIncapacidades: [, setCurrentIncapacidades],
  } = useContext(UsersContext);

  const deleteUser = (user) => {
    swal({
      title: "Eliminar",
      text: "Estas seguro que deseas eliminar el empleado?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        eliminar(user);
        swal({
          text: "El archivo se ha borrado con exito",
          icon: "success",
          timer: 1000,
        });
      }
    });
  };

  const eliminar = async (user) => {
    await db.collection("empleados").doc(user.id).delete();
    console.log("Empleado eliminado");
    setUsers(function (current) {
      return current.filter((current) => {
        return current.codigo !== user.codigo;
      });
    });
  };

  const history = useHistory();

  const llevar = () => {
    setCurrent(user);
    const cargarIncapacidad = {
      codigo: current.codigo,
      fechaIngreso: current.fechaIngreso,
    };

    console.log(current);
    history.push("/incapacidades", setCurrentIncapacidades(cargarIncapacidad));
  };

  return (
    <StyledTableRow key={user.id}>
      <StyledTableCell align="right">{user.codigo}</StyledTableCell>
      <StyledTableCell align="right">{user.nombre}</StyledTableCell>
      <StyledTableCell align="right">{user.fechaIngreso}</StyledTableCell>
      <StyledTableCell align="right">{user.puesto}</StyledTableCell>
      <StyledTableCell align="right">{user.dui}</StyledTableCell>
      <StyledTableCell align="right">
        <button className="icon-update" onClick={() => setCurrent(user)}>
          {<CreateIcon />}
        </button>
        <button className="icon-delete" onClick={() => deleteUser(user)}>
          {<DeleteIcon />}
        </button>
        <button className="icon-inca" onClick={() => llevar()}>
          {<LocalHospitalIcon />}
        </button>
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default Row;
