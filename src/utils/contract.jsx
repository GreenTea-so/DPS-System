import { createContext, useContext } from "react";
import Web3 from "web3";
import abi from "../abi";

const ContractContext = createContext();

const useContract = () => useContext(ContractContext);

const ContractProvider = ({ children }) => {
  const web3 = new Web3("http://192.168.21.107:8545");
  const contract = new web3.eth.Contract(
    abi,
    "0xa9d2dc2a9c7c1474a6b02424f15a1d9e363042fa"
  );
  return (
    <ContractContext.Provider value={{ web3, contract }}>
      {children}
    </ContractContext.Provider>
  );
};

export { ContractProvider };
export default useContract;
