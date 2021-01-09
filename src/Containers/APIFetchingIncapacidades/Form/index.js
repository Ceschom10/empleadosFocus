
import React, { useContext, useState } from "react";
import { db } from "../../../Firebase/firebase";
import { incapacidadesContext} from "../Context";
import FormLayoutIncapacidades from "./FormLayoutIncapacidades";
import FormLayout from "./FormLayoutIncapacidades";

function FormIncapacidades() {
 
  const {
    incapacidades: [incapacidades, setIncapacidades],
    currentIncapacidades: [currentIncapacidades, setCurrenteIncapacidades],
  } = useContext(incapacidadesContext);

  const isAddMode = !currentIncapacidades.id;

  const postUser = async (payloadPost) => {
    await db.collection('incapacidades').doc().set(payloadPost);
    console.log('new incapacidad');
  };

  const putUser = async (payloadPut, payloadPost) => {
      await db.collection('incapacidades').doc(payloadPut.id).update(payloadPost);
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
    if (isAddMode) {
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
