import React, { useContext } from "react";
import { db } from "../../../Firebase/firebase";
import { UsersContext } from "../../APIFetching/Context";
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

function RowIncapacidades({ incapacidad }) {
  const {
    incapacidades: [, setIncapacidades],
    currentIncapacidades: [, setCurrentIncapacidades],
  } = useContext(UsersContext);

  const deleteUser = async (incapacidad) => {
    if (window.confirm("Desea eliminarlo")) {
        await db.collection("incapacidades").doc(incapacidad.id).delete();
      console.log("Empleado eliminado");  
    }
    setIncapacidades(function (currentIncapacidades) {
      return currentIncapacidades.filter((currentIncapacidades) => {
        return currentIncapacidades.codigo!== incapacidad.codigo;
      });
    });
  };

  

  return (
    <tr>
      <td>{incapacidad.codigo}</td>
      <td>{incapacidad.fechaIngreso}</td>
      <td>{incapacidad.unidadMedica}</td>
      <td>{incapacidad.doctor}</td>
      <td>{incapacidad.inicioIncapacidad}</td>
      <td>{incapacidad.finIncapacidad}</td>
      <td>{incapacidad.diasCobertura}</td>
      <td>
        <button onClick={() => setCurrentIncapacidades(incapacidad)}>{<CreateIcon className="icon-update"/>}</button>
        <button onClick={() => deleteUser(incapacidad)}>{<DeleteIcon className="icon-delete"/>}</button>
      </td>
    </tr>
  );
}

export default RowIncapacidades;
