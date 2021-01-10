import React, { createContext, useState } from "react";

export const UsersContext = createContext();


function UsersProvider(props) {
  const [users, setUsers] = useState([]);
  const [current, setCurrent] = useState({});
  const [incapacidades, setIncapacidades] = useState([]);
  const [currentIncapacidades, setCurrentIncapacidades] = useState({});
  const [fecha, setFecha] = useState({});

  return (
    <UsersContext.Provider
      value={{ 
        users: [users, setUsers], 
        current: [current, setCurrent],
        incapacidades: [incapacidades, setIncapacidades],
        currentIncapacidades: [currentIncapacidades, setCurrentIncapacidades],
        fecha: [fecha, setFecha],
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;
