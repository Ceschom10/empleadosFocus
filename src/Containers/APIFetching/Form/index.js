import React, { useContext } from "react";
import { db } from "../../../Firebase/firebase";
import { UsersContext } from "../Context";
import FormLayout from "./FormLayout"
import swal from 'sweetalert'

function Form() {
 
  const {
    current: [current, ],
  } = useContext(UsersContext);

  const isAddMode = !current.id;

  const postUser = async (payloadPost) => {
    console.log(payloadPost);
    await db.collection('empleados').doc().set(payloadPost);
    swal({
      text: "El empleado se ha creado con exito",
      icon: "success",
      timer: 800,
    });
    console.log('new empleado');
  };

  const putUser = async (payloadPut, payloadPost) => {
      await db.collection('empleados').doc(payloadPut.id).update(payloadPost);
      swal({
        text: "El empleado se ha actualizado con exito",
        icon: "success",
        timer: 800,
      });
      console.log('Empleado actualizado');
  };

  const onSubmit = (values, e) => {
    console.log({ values });

    /*let f= values.fechaIngreso;
    f= f.getDate() + "/" +  (f.getMonth() + 1)  + "/" +  f.getFullYear();*/
    const payloadPost = {
      codigo: parseInt(values.codigo),
      nombre: values.nombre,
      fechaIngreso: values.fechaIngreso,
      puesto: values.puesto,
      dui: values.dui,
    };
    const payloadPut = {
      ...values,
      codigo: parseInt(values.codigo),
    }
    console.log({ values, isAddMode });
    if (values.id=== "") {
      postUser(payloadPost);
      //console.log({payload});
    }else{
      putUser(payloadPut, payloadPost)
    }

    e.target.reset();
  };

  return (
    <div className="App-box">
      <FormLayout
        onSubmit={onSubmit}
        currentValues={current}
        key={current.id}
      />
    </div>
  );
}

export default Form;
