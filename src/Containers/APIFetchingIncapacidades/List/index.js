import React, { useCallback, useContext, useEffect} from "react";
import styled, { css } from "styled-components";
import { db } from "../../../Firebase/firebase";
import RowIncapacidades from "./RowIncapacidades";
import { UsersContext } from "../../APIFetching/Context";

const ButtonAdd = styled.button`
  &: hover {
    color: yellow;
    background-color: #36a149;
  }

  ${(props) =>
    props.btnType === "primary" &&
    css`
    background-color: #ff1465;
    color:#fff;
    font-size: 18px;
    `}

  ${(props) =>
    props.btnType === "secondary" &&
    css`
    background-color: #4a4bd6;
    color:#fff;
    font-size: 20px;
    `}
`;

function ListIncapacidades() {
  const {
    incapacidades: [incapacidades, setIncapacidades],
    currentIncapacidades: [currentIncapacidades, setCurrentIncapacidades],
  } = useContext(UsersContext);

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
            <th className="th-css">Codigo</th>
            <th className="th-css">Fecha ingreso</th>
            <th className="th-css">Unidad medica</th>
            <th className="th-css">Doctor</th>
            <th className="th-css">fecha inicio</th>
            <th className="th-css">fecha fin</th>
            <th className="th-css">Dias cobertura</th>
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
