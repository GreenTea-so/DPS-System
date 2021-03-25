import useCustomState from "../utils/customState";
import useContract from "../utils/contract";
import { useHistory } from "react-router-dom";
import useStore from "../utils/store";
import { sliceObj } from "../utils/sliceObj";

const AddDtp = () => {
  const history = useHistory();
  const {
    store: { address },
  } = useStore();
  const { state, onChangeState } = useCustomState({
    drive_number: "",
  });
  const { contract, web3 } = useContract();
  const addDtp = async () => {
    try {
      await web3.eth.personal.unlockAccount(
        "0xD3e049Db62233E80F44E7A5a3e75F1474e609D1B",
        "123",
        9999
      );
      await web3.eth.personal.unlockAccount(
        "0x6aF0a1DdD80F9607B0597bE17278F4F1185e0a32",
        "123",
        9999
      );
      await contract.methods.dtp(state.drive_number).send({ from: address });
      const driver = sliceObj(
        await contract.methods
          .check_drive(state.drive_number)
          .call({ from: address })
      );
      const user = sliceObj(
        await contract.methods.check_user().call({ from: driver.adr })
      );
      const companyBalance = await web3.eth.getBalance(
        "0x6aF0a1DdD80F9607B0597bE17278F4F1185e0a32"
      );

      if (+companyBalance < user.strah_vznos * 10) {
        await contract.methods.dolg_bank(state.drive_number).send({
          from: "0xD3e049Db62233E80F44E7A5a3e75F1474e609D1B",
          value: user.strah_vznos * 10 - companyBalance + 1000000000000000000,
        });
      }
      await contract.methods.dtp_pay(state.drive_number).send({
        from: "0x6aF0a1DdD80F9607B0597bE17278F4F1185e0a32",
        value: user.strah_vznos * 10,
      });
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
        <button onClick={addDtp}>Оформить ДТП</button>
      </div>
    </div>
  );
};

export default AddDtp;
