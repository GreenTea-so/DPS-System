import { createContext, useContext, useState } from "react";

export const initStore = {
  address: "",
  user: {
    FIO: "",
    avto: false,
    dtp: "0",
    login: "",
    staj: "",
    strah_vznos: "",
    _shtraf_dest: "",
    balance: 0,
    role: "0",
    drive_number: "",
    len_car: "0",
    len_msg: "0",
    len_shtrafs: "0",
    len_input_drive: "0",
    len_input_car: "0"
  },
  license: {
    adr: "",
    category: "",
    srok: "",
  },
  cars: [],
  messages: [],
  shtrafs: [],
  dtps: [],
  inputs_drive: [],
  inputs_car: []
};

const StoreContext = createContext(initStore);

const useStore = () => useContext(StoreContext);

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState(initStore);

  const onChangeStore = (name, value) => {
    if (name === "store") {
      setStore(value);
    } else {
      setStore((prev) => ({ ...prev, [name]: value }));
    }
  };
  return (
    <StoreContext.Provider value={{ store, onChangeStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider };
export default useStore;
