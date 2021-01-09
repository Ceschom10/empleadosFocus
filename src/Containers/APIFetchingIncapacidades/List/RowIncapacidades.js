import React, { useContext } from "react";
import { db } from "../../../Firebase/firebase";
import { incapacidadesContext } from "../Context";

function RowIncapacidades({ incapacidad }) {
  const {
    incapacidades: [incapacidades, setIncapacidades],
    currentIncapacidades: [currentIncapacidades, setCurrentIncapacidades],
  } = useContext(incapacidadesContext);

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
        <button onClick={() => setCurrentIncapacidades(incapacidad)}>E</button>
        <button onClick={() => deleteUser(incapacidad)}>X</button>
      </td>
    </tr>
  );
}

export default RowIncapacidades;
