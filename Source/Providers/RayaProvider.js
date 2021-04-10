import React, { useContext, useState, createContext } from "react";

const RayaContext = createContext(null);

const RayaProvider = ({ children }) => {
  const [rayaState, setRayaState] = useState("hello raya");

  const createRaya = (dt) => {
    return `${rayaState} ${dt}! Welcome! `;
  };

  return (
    <RayaContext.Provider value={{ rayaState, setRayaState, createRaya }}>
      {children}
    </RayaContext.Provider>
  );
};

const useRaya = () => {
  const rayaData = useContext(RayaContext);
  if (rayaData === null) {
    throw new Error("Invalid Data");
  }
  return rayaData;
};

export { RayaProvider, RayaContext, useRaya };
