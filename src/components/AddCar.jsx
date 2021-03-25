import useCustomState from "../utils/customState";
import useContract from "../utils/contract";
import { useHistory } from "react-router-dom";
import useStore from "../utils/store";
import useValidator from "../utils/validator";

const AddCar = () => {
  const history = useHistory();
  const {
    store: { address },
  } = useStore();
  const { state, onChangeState } = useCustomState({
    price: 0,
    srok: "",
    category: "",
  });
  const { contract, web3 } = useContract();
  const { valid } = useValidator({
    srok: [
      {
        validator: (value) => value <= 100,
        error: "Дата эксплуатации не может быть больше 100 лет",
      },
      {
        validator: (value) => value >= 0,
        error: "Дата эксплуатации не может быть меньше 0",
      },
    ],
  });
  const addCar = async () => {
    try {
      await contract.methods
        .registr_car(
          state.category,
          web3.utils.toWei(state.price.toString()),
          state.srok
        )
        .send({ from: address });
      history.push("/profil");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="signup">
      <div className="item">
        <div className="item">
          <div className="label">Категория</div>
          <input
            type="text"
            value={state.category}
            onChange={(e) => onChangeState("category", e.target.value)}
          />
        </div>
        <div className="label">Цена</div>
        <input
          type="number"
          value={state.price}
          onChange={(e) => onChangeState("price", e.target.value)}
        />
      </div>
      <div className="item">
        <div className="label">Срок эксплуатации</div>
        <input
          type="text"
          value={state.srok}
          onChange={(e) => onChangeState("srok", e.target.value)}
        />
      </div>

      <button onClick={() => valid({ srok: state.srok }) && addCar()}>
        Добавить
      </button>
    </div>
  );
};

export default AddCar;
