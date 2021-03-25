import useCustomState from "../utils/customState";
import useContract from "../utils/contract";
import { useHistory, Link } from "react-router-dom";
import useStore from "../utils/store";

const Login = () => {
  const history = useHistory();
  const { state, onChangeState } = useCustomState({
    login: "",
    password: "",
  });
  const { onChangeStore } = useStore();
  const { web3, contract } = useContract();
  const login = async () => {
    const address = await contract.methods.return_adr(state.login).call();
    await web3.eth.personal.unlockAccount(address, state.password, 99999);
    sessionStorage.setItem("address", address);
    onChangeStore("address", address);
    history.push("/profil");
  };
  return (
    <div className="signup">
      <div className="item">
        <div className="label">Логин</div>
        <input
          type="text"
          value={state.login}
          onChange={(e) => onChangeState("login", e.target.value)}
        />
      </div>
      <div className="item">
        <div className="label">Пароль</div>
        <input
          type="password"
          value={state.password}
          onChange={(e) => onChangeState("password", e.target.value)}
        />
      </div>

      <button onClick={login}>Авторизоваться</button>
      <br />
      <br />

      <Link to="/signup">Регистрация</Link>
      <br/>
      <Link to="/help">Помощь</Link>
      <br/>
      <Link to="/developers">Разработчики</Link>
    </div>
  );
};

export default Login;
