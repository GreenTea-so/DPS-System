import useCustomState from "../utils/customState";
import useContract from "../utils/contract";
import { useHistory } from "react-router-dom";
import { dateToSeconds } from "../utils/dateToSeconds";
import useStore from "../utils/store";

const AddLicense = () => {
  const history = useHistory();
  const {
    store: { address },
  } = useStore();
  const { state, onChangeState } = useCustomState({
    id: "",
    srok: "",
    category: "",
  });
  const { contract } = useContract();
  const addLicense = async () => {
    try {
      await contract.methods
        .drive_add(state.id, dateToSeconds(state.srok), state.category)
        .send({ from: address });
      history.push("/profil");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="signup">
      <div className="item">
        <div className="label">Номер</div>
        <input
          type="text"
          value={state.id}
          onChange={(e) => onChangeState("id", e.target.value)}
        />
      </div>
      <div className="item">
        <div className="label">Срок действия</div>
        <input
          type="date"
          value={state.srok}
          onChange={(e) => onChangeState("srok", e.target.value)}
        />
      </div>
      <div className="item">
        <div className="label">Категория</div>
        <input
          type="text"
          value={state.category}
          onChange={(e) => onChangeState("category", e.target.value)}
        />
      </div>

      <button onClick={addLicense}>Добавить</button>
    </div>
  );
};

export default AddLicense;
