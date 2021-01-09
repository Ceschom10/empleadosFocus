import React, { createContext, useState } from "react";

export const UsersContext = createContext();

function UsersProvider(props) {
  const [users, setUsers] = useState([]);
  const [current, setCurrent] = useState({});

  return (
    <UsersContext.Provider
      value={{ users: [users, setUsers], current: [current, setCurrent] }}
    >
      {props.children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;
