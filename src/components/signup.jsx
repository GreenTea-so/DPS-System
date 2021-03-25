import useCustomState from "../utils/customState";
import useContract from "../utils/contract";
import { useHistory } from "react-router-dom";
import useValidator from "../utils/validator";

const SignUp = () => {
  const history = useHistory();
  const { state, onChangeState } = useCustomState({
    login: "",
    password: "",
    fio: "",
    staj: 0,
    dtp: 0,
    strafs: 0,
    vznos: 0,
    balance: 0,
  });
  const { web3, contract } = useContract();
  const { valid } = useValidator({
    staj: [
      {
        validator: (value) => value <= 100,
        error: "Стаж не может быть больше 100 лет",
      },
      {
        validator: (value) => value >= 0,
        error: "Стаж не может быть меньше 0",
      },
    ],
    dtp: [
      {
        validator: (value) => value <= 100,
        error: "Колличестыо ДТП не может быть больше 100",
      },
      {
        validator: (value) => value >= 0,
        error: "Колличестыо ДТП не может быть меньше 0",
      },
    ],
    strafs: [
      {
        validator: (value) => value <= 100,
        error: "Колличестыо штрафов не может быть больше 100",
      },
      {
        validator: (value) => value >= 0,
        error: "Колличестыо штрафов не может быть меньше 0",
      },
    ],
  });
  const signup = async () => {
    const newUser = await web3.eth.personal.newAccount(state.password);
    const accounts = await web3.eth.getAccounts();
    await web3.eth.personal.unlockAccount(accounts[0], "123", 9999);
    await contract.methods
      .create_user(
        newUser,
        state.login,
        state.fio,
        state.staj,
        state.dtp,
        state.strafs,
        web3.utils.toWei(state.vznos.toString())
      )
      .send({ from: accounts[0] });
    await web3.eth.sendTransaction({
      from: accounts[0],
      to: newUser,
      value: state.balance * 10 ** 18,
    });
    history.push("/login");
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
      <div className="item">
        <div className="label">ФИО</div>
        <input
          type="text"
          value={state.fio}
          onChange={(e) => onChangeState("fio", e.target.value)}
        />
      </div>
      <div className="item">
        <div className="label">Стаж</div>
        <input
          type="number"
          max="100"
          value={state.staj}
          onChange={(e) => onChangeState("staj", e.target.value)}
        />
      </div>
      <div className="number">
        <div className="label">Колличестыо ДТП</div>
        <input
          type="number"
          value={state.dtp}
          onChange={(e) => onChangeState("dtp", e.target.value)}
        />
      </div>
      <div className="item">
        <div className="label">Колличество штрафов</div>
        <input
          type="number"
          value={state.strafs}
          onChange={(e) => onChangeState("strafs", e.target.value)}
        />
      </div>

      <div className="item">
        <div className="label">Страховой взнос</div>
        <input
          type="number"
          value={state.vznos}
          onChange={(e) => onChangeState("vznos", e.target.value)}
        />
      </div>

      <div className="item">
        <div className="label">Баланс</div>
        <input
          type="number"
          value={state.balance}
          onChange={(e) => onChangeState("balance", e.target.value)}
        />
      </div>

      <button
        onClick={() =>
          valid({ staj: state.staj, dtp: state.dtp, strafs: state.strafs }) &&
          signup()
        }
      >
        Зарегестрироваться
      </button>
    </div>
  );
};

export default SignUp;
