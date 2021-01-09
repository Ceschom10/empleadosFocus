import React, { createContext, useState } from "react";

export const incapacidadesContext = createContext();

function IncapacidadesProvider(props) {
  const [incapacidades, setIncapacidades] = useState([]);
  const [currentIncapacidades, setCurrentIncapacidades] = useState({});

  return (
    <incapacidadesContext.Provider
      value={{
        incapacidades: [incapacidades, setIncapacidades],
        currentIncapacidades: [currentIncapacidades, setCurrentIncapacidades],
      }}
    >
      {props.children}
    </incapacidadesContext.Provider>
  );
}

export default IncapacidadesProvider;

