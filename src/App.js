import "./App.css";

import { ContractProvider } from "./utils/contract";
import { StoreProvider } from "./utils/store";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <StoreProvider>
      <ContractProvider>
        <Router>
          <Routes />
        </Router>
      </ContractProvider>
    </StoreProvider>
  );
}

export default App;
