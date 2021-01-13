import React, { useContext} from "react";
import { db } from "../../../Firebase/firebase";
import { UsersContext } from "../../APIFetching/Context";
import FormLayoutIncapacidades from "./FormLayoutIncapacidades";
import swal from 'sweetalert';

function FormIncapacidades() {
 
  const {
    currentIncapacidades: [currentIncapacidades, ],
  } = useContext(UsersContext);

  const isAddMode = !currentIncapacidades.id;

  const postUser = async (payloadPost) => {
    await db.collection('incapacidades').doc().set(payloadPost);
    swal({
      text: "La incapacidad se ha creado con exito",
      icon: "success",
      timer: 800,
    });
    console.log('new incapacidad');
  };

  const putUser = async (payloadPut, payloadPost) => {
      await db.collection('incapacidades').doc(payloadPut.id).update(payloadPost);
      swal({
        text: "La incapacidad se ha actualizado con exito",
        icon: "success",
        timer: 800,
      });
      console.log('Incapacidad actualizado');
  };

  const onSubmit = (values, e) => {
    console.log({ values });

    const payloadPost = {
      codigo: parseInt(values.codigo),
      fechaIngreso: values.fechaIngreso,
      unidadMedica: values.unidadMedica,
      doctor: values.doctor,
      inicioIncapacidad: values.inicioIncapacidad,
      finIncapacidad: values.finIncapacidad,
      diasCobertura: parseInt(values.diasCobertura),
    };
    const payloadPut = {
      ...values,
      codigo: parseInt(values.codigo),
      diasCobertura: parseInt(values.diasCobertura),
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
      <FormLayoutIncapacidades
        onSubmit={onSubmit}
        currentValues={currentIncapacidades}
        key={currentIncapacidades.id}
      />
    </div>
  );
}

export default FormIncapacidades;
