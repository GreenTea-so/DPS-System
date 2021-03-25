import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import useStore, { initStore } from "./utils/store";

import SignUp from "./components/signup";
import Login from "./components/login";
import Profil from "./components/profil";
import AddLicense from "./components/AddLicense";
import AddCar from "./components/AddCar";
import AddShtraf from "./components/AddShtraf";
import AddStrah from "./components/AddStrah";
import AddDtp from "./components/AddDtp";
import { useEffect } from "react";
import Help from "./components/Help";
import Developers from "./components/Developers";

const Routes = () => {
  const history = useHistory();
  const {
    store: { address },
    onChangeStore,
  } = useStore();

  useEffect(() => {
    const address = sessionStorage.getItem("address");
    if (!!address) {
      onChangeStore("address", address);
      history.push("/profil");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    onChangeStore("store", initStore);
    sessionStorage.removeItem("address");
    history.push("/login");
  };

  return (
    <>
      {address !== "" && (
        <header style={{ textAlign: "end" }}>
          <button onClick={() => history.push("/help")}>Помощь</button>&nbsp;
          <button onClick={() => history.push("/developers")}>
            Разработчики
          </button>
          &nbsp;
          <button onClick={logout}>Выйти</button>
        </header>
      )}
      <Switch>
        <Route path="/help" component={Help} />
        <Route path="/developers" component={Developers} />
        {address === "" ? (
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Redirect to="/login" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/profil" component={Profil} />
            <Route path="/add-license" component={AddLicense} />
            <Route path="/add-car" component={AddCar} />
            <Route path="/create-shtraf" component={AddShtraf} />
            <Route path="/add-strah" component={AddStrah} />
            <Route path="/add-dtp" component={AddDtp} />
            <Redirect to="/profil" />
          </Switch>
        )}
        <Redirect to="/login" />
      </Switch>
    </>
  );
};

export default Routes;
