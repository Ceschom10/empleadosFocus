
import React, { useContext } from "react";
import { db } from "../../../Firebase/firebase";
import { UsersContext } from "../Context";
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

function Row({ user }) {
  const {
    users: [, setUsers],
    current: [, setCurrent],
  } = useContext(UsersContext);

  const deleteUser = async (user) => {
    if (window.confirm("Desea eliminarlo")) {
        await db.collection("empleados").doc(user.id).delete();
      console.log("Empleado eliminado"); 
      setUsers(function (current) {
        return current.filter((current) => {
          return current.codigo!== user.codigo;
        });
      });
    }; 
    }
    

  const redirigir = ({user}) =>{
    
      
  }
    

  return (
    <tr>
      <td>{user.codigo}</td>
      <td>{user.nombre}</td>
      <td>{user.fechaIngreso}</td>
      <td>{user.puesto}</td>
      <td>{user.dui}</td>
      <td>
        <button  onClick={() => setCurrent(user)}>{<CreateIcon className="icon-update"/>}</button>
        <button  onClick={() => deleteUser(user)}>{<DeleteIcon className="icon-delete"/>}</button>
        <button  onClick={() => redirigir(user)}>{<LocalHospitalIcon className="icon-inca"/>}</button>
      </td>
    </tr>
  );
}

export default Row;
