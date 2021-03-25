import useCustomState from "../utils/customState";
import useContract from "../utils/contract";
import { useHistory } from "react-router-dom";
import useStore from "../utils/store";

const AddShtraf = () => {
  const history = useHistory();
  const {
    store: { address },
  } = useStore();
  const { state, onChangeState } = useCustomState({
    drive_number: "",
  });
  const { contract } = useContract();
  const addShtraf = async () => {
    try {
      await contract.methods.shtraf_dps(state.drive_number).send({ from: address });
      history.push("/profil");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="signup">
      <div className="item">
        <div className="item">
          <div className="label">Номер водительского удостоверения</div>
          <input
            type="text"
            value={state.drive_number}
            onChange={(e) => onChangeState("drive_number", e.target.value)}
          />
        </div>
        <button onClick={addShtraf}>Оштрафовать</button>
      </div>
    </div>
  );
};

export default AddShtraf;
