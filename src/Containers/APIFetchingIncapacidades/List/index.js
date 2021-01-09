import React, { useCallback, useContext, useEffect, useState } from "react";
import { incapacidadesContext } from "../Context";
import styled, { css } from "styled-components";
import { db } from "../../../Firebase/firebase";
import RowIncapacidades from "./RowIncapacidades";

const ButtonAdd = styled.button`
  color: white;
  background-color: ${(props) =>
    props.btnType === "primary" ? "blue" : "gray"};

  &: hover {
    color: yellow;
    background-color: orange;
  }

  ${(props) =>
    props.btnType === "primary" &&
    css`
      border: 4px solid lightgreen;
      font-size: 29px;
      &: hover {
        color: pink;
        background-color: cyan;
      }
    `}

  ${(props) =>
    props.btnType === "secondary" &&
    css`
      border: 8px solid salmon;
      font-size: 34px;
      &: hover {
        color: lightsalmon;
        background-color: pink;
      }
    `}
`;

function ListIncapacidades() {
  const {
    incapacidades: [incapacidades, setIncapacidades],
    currentIncapacidades: [currentIncapacidades, setCurrentIncapacidades],
  } = useContext(incapacidadesContext);

  const fetchUsers = useCallback(async () => {
    db.collection('incapacidades').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        //console.log(doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      docs.sort((a, b) => (a.codigo > b.codigo ? 1 : a.codigo < b.codigo ? -1 : 0));
      //console.log(docs);
      setIncapacidades(docs);
    });
  }, [setIncapacidades]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="App-box">
      <ButtonAdd
        type="button"
        onClick={() => setCurrentIncapacidades({})}
        btnType={currentIncapacidades.id ? "primary" : "secondary"}
      >
        Add+
      </ButtonAdd>
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Fecha ingreso</th>
            <th>Unidad medica</th>
            <th>Doctor</th>
            <th>fecha inicio</th>
            <th>fecha fin</th>
            <th>Dias cobertura</th>
          </tr>
        </thead>
        <tbody>
          {incapacidades.map((incapacidad) => {
            //{console.log(users)}
            //{console.log(user);}
            return <RowIncapacidades incapacidad={incapacidad} key={incapacidad.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListIncapacidades;
