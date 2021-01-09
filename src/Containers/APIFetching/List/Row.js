import React, { useContext } from "react";
import { db } from "../../../Firebase/firebase";
import { UsersContext } from "../Context";

function Row({ user }) {
  const {
    users: [users, setUsers],
    current: [current, setCurrent],
  } = useContext(UsersContext);

  const deleteUser = async (user) => {
    if (window.confirm("Desea eliminarlo")) {
        await db.collection("empleados").doc(user.id).delete();
      console.log("Empleado eliminado");  
    }
    setUsers(function (current) {
      return current.filter((current) => {
        return current.codigo!== user.codigo;
      });
    });
  };

  return (
    <tr>
      <td>{user.codigo}</td>
      <td>{user.nombre}</td>
      <td>{user.fechaIngreso}</td>
      <td>{user.puesto}</td>
      <td>{user.dui}</td>
      <td>
        <button onClick={() => setCurrent(user)}>E</button>
        <button onClick={() => deleteUser(user)}>X</button>
      </td>
    </tr>
  );
}

export default Row;
