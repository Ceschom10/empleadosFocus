import React, { useCallback, useContext, useEffect, useState } from "react";
import {  UsersContext } from "../Context";
import styled, { css } from "styled-components";
import { db } from "../../../Firebase/firebase";
import Row from "./Row";

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

function List() {
  const {
    users: [users, setUsers],
    current: [current, setCurrent],
  } = useContext(UsersContext);

  const fetchUsers = useCallback(async () => {
    db.collection('empleados').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        //console.log(doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      docs.sort((a, b) => (a.codigo > b.codigo ? 1 : a.codigo < b.codigo ? -1 : 0));
      //console.log(docs);
      setUsers(docs);
    });
  }, [setUsers]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="App-box">
      <ButtonAdd
        type="button"
        onClick={() => setCurrent({})}
        btnType={current.id ? "primary" : "secondary"}
      >
        Add+
      </ButtonAdd>
      <table>
        <thead >
          <tr>
            <th className="th-css">Codigo</th>
            <th className="th-css">Nombre</th>
            <th className="th-css">Fecha</th>
            <th className="th-css">Puesto</th>
            <th className="th-css">Dui</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            //{console.log(users)}
            //{console.log(user);}
            return <Row user={user} key={user.id}>{user}</Row>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
