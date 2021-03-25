import useCustomState from "../utils/customState";
import useContract from "../utils/contract";
import { useHistory } from "react-router-dom";
import useStore from "../utils/store";
import { sliceObj } from "../utils/sliceObj";

const AddStrah = () => {
  const history = useHistory();
  const {
    store: { address },
  } = useStore();
  const { state, onChangeState } = useCustomState({
    drive_number: "",
    price: 0,
  });
  const { contract, web3 } = useContract();
  const addStrah = async () => {
    try {
      await contract.methods
        .strahovka_vznos()
        .send({ from: address, value: state.price * 10 ** 18 });
      history.push("/profil");
    } catch (e) {
      console.log(e);
    }
  };

  const checkStrah = async () => {
    try {
      await contract.methods
        .strahovka(state.drive_number)
        .send({ from: address });
      const user = sliceObj(
        await contract.methods.check_user().call({ from: address })
      );
      onChangeState("price", web3.utils.fromWei(user.strah_summ.toString(), "ether"));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="signup">
      <div className="item">
        <div className="item">
          <div className="label">Расчитать стоимость страховки</div>
          <div className="item">
            <div className="label">id автомобиля</div>
            <input
              type="text"
              value={state.drive_number}
              onChange={(e) => onChangeState("drive_number", e.target.value)}
            />
          </div>
        </div>
        <button onClick={checkStrah}>Расчитать</button>
      </div>
      <br />
      <br />
      <div className="item">
        <div className="label">Оформить страховку</div>
        <div className="item">
          <div className="label">Сумма страховки</div>
          <input type="text" value={state.price} disabled />
        </div>
      </div>
      <button onClick={addStrah}>Оформить</button>
    </div>
  );
};

export default AddStrah;
