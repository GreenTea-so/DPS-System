import useContract from "../utils/contract";
import { sliceObj } from "../utils/sliceObj";
import useStore from "../utils/store";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { secondsToDate } from "../utils/secondsToDate";

const Profil = () => {
  const history = useHistory();
  const {
    store: {
      address,
      user,
      license,
      cars,
      messages,
      shtrafs,
      dtps,
      inputs_drive,
      inputs_car,
    },
    onChangeStore,
  } = useStore();
  const { contract, web3 } = useContract();

  const getProfilData = async () => {
    let existuser = {};
    if (address === "0xD3e049Db62233E80F44E7A5a3e75F1474e609D1B") {
      existuser = { role: "bank" };
    } else if (address === "0x6aF0a1DdD80F9607B0597bE17278F4F1185e0a32") {
      existuser = { role: "company" };
    } else {
      existuser = sliceObj(
        await contract.methods.check_user().call({ from: address })
      );
    }
    if (!!existuser.drive_number && existuser.drive_number !== "") {
      const license = sliceObj(
        await contract.methods
          .check_drive(existuser.drive_number)
          .call({ from: address })
      );
      onChangeStore("license", license);
    }
    const lenghts = sliceObj(
      await contract.methods.check_lens().call({ from: address })
    );
    if (lenghts.len_car !== "0") {
      let cars = [];
      for (let i = 0; i < +lenghts.len_car; i++) {
        const car = sliceObj(
          await contract.methods.check_car(i).call({ from: address })
        );
        cars.push(car);
      }
      onChangeStore("cars", cars);
    }
    if (lenghts.len_msg !== "0") {
      let messages = [];
      for (let i = 0; i < +lenghts.len_msg; i++) {
        const msg = sliceObj(
          await contract.methods.check_msg(i).call({ from: address })
        );
        messages.push(msg);
      }
      onChangeStore("messages", messages);
    }
    if (lenghts.len_shtrafs !== "0") {
      let shtrafs = [];
      for (let i = 0; i < +lenghts.len_shtrafs; i++) {
        const shtraf = sliceObj(
          await contract.methods.check_shtraf(i).call({ from: address })
        );
        shtrafs.push(shtraf);
      }
      onChangeStore("shtrafs", shtrafs);
    }
    if (lenghts.len_dtp !== "0") {
      let dtps = [];
      for (let i = 0; i < +lenghts.len_dtp; i++) {
        const dtp = sliceObj(
          await contract.methods.check_dtp(i).call({ from: address })
        );
        dtps.push(dtp);
      }
      onChangeStore("dtps", dtps);
    }
    if (existuser.role === "1") {
      if (lenghts.len_input_drive !== "0") {
        let inputs_drive = [];
        for (let i = 0; i < +lenghts.len_input_drive; i++) {
          const input_drive = sliceObj(
            await contract.methods.check_input_drive(i).call({ from: address })
          );
          const input_user = sliceObj(
            await contract.methods.check_user().call({ from: input_drive.adr })
          );
          inputs_drive.push({ ...input_user, ...input_drive });
        }
        onChangeStore("inputs_drive", inputs_drive);
      }
      if (lenghts.len_input_car !== "0") {
        let inputs_car = [];
        for (let i = 0; i < +lenghts.len_input_car; i++) {
          const input_car = sliceObj(
            await contract.methods.check_input_car(i).call({ from: address })
          );
          const input_user = sliceObj(
            await contract.methods.check_user().call({ from: input_car.adr })
          );
          const license_user = sliceObj(
            await contract.methods
              .check_drive(input_user.drive_number)
              .call({ from: address })
          );
          inputs_car.push({
            car: input_car,
            driver: input_user,
            license: license_user,
          });
        }
        onChangeStore("inputs_car", inputs_car);
      }
    }

    const balance = (await web3.eth.getBalance(address)) / 10 ** 18;
    const objUser = { ...existuser, ...lenghts, balance };
    onChangeStore("user", objUser);
  };

  const updateLicense = async () => {
    try {
      await contract.methods.update_srok().send({ from: address });
      getProfilData();
    } catch (error) {
      console.log(error);
    }
  };

  const payShtraf = async (id) => {
    try {
      await contract.methods
        .shtraf_driver(id)
        .send({ from: address, value: 10 * 10 ** 18 });
      getProfilData();
    } catch (error) {
      console.log(error);
    }
  };

  const changeSatus = async () => {
    try {
      await contract.methods.avto().send({ from: address });
      getProfilData();
    } catch (error) {
      console.log(error);
    }
  };

  const confirmDrive = async (id, status) => {
    try {
      await contract.methods.drive_add_dps(id, status).send({ from: address });
      getProfilData();
    } catch (error) {
      console.log(error);
    }
  };

  const confirmCar = async (id, status) => {
    try {
      await contract.methods
        .registr_car_dps(id, status)
        .send({ from: address });
      getProfilData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfilData();
    const timer = setInterval(() => {
      getProfilData();
    }, 2000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrapper" style={{ display: "flex" }}>
      <div className="user" style={{ width: "30vw" }}>
        <div className="item">
          <div className="label">
            ???????????????????? ??
            {user.role === "0" || user.role === "1"
              ? " ???????????????? "
              : " ?????????????????? ???????????????? "}
          </div>
          {(user.role === "0" || user.role === "1") && (
            <>
              <div className="item">??????: {user.FIO}</div>
              <div className="item" style={{ display: "flex" }}>
                <div className="item">
                  ?????????? ???????????????? ????????????:
                  {!user.avto ? " ????????????????????????????" : " ????????????"}
                </div>
                &nbsp;
                <button onClick={changeSatus}>??????????????????????</button>
              </div>
              <div className="item">?????????????????????? ??????: {user.dtp}</div>
              <div className="item">??????????: {user.login}</div>
              <div className="item">????????: {user.staj}</div>
              <div className="item">
                ?????????????????? ??????????: {web3.utils.fromWei(user.strah_vznos, "ether")}
              </div>
              <div className="item">
                ?????????????????????? ??????????????: {user._shtraf_dest}
              </div>
            </>
          )}

          <div className="item">????????????: {user.balance}</div>
        </div>

        {(user.role === "0" || user.role === "1") && (
          <>
            <div className="item">
              <br />
              <br />
              <br />
              <br />
              {user.drive_number !== "" ? (
                <>
                  <div className="label">
                    ???????????????????? ?? ???????????????????????? ??????????????????????????
                  </div>
                  <div className="item">??????????: {user.drive_number}</div>
                  <div className="item">??????????????????: {license.category}</div>
                  <div className="item">
                    ????????: {secondsToDate(+license.srok)}
                  </div>
                  <button onClick={updateLicense}>
                    ???????????????? ???????????????????????? ??????????????????????????
                  </button>
                </>
              ) : (
                <button onClick={() => history.push("/add-license")}>
                  ???????????????? ???????????????????????? ??????????????????????????
                </button>
              )}
            </div>

            <div className="item">
              <br />
              <br />
              <br />
              <br />
              {user.drive_number !== "" && (
                <>
                  <div className="label">????????????????????</div>
                  {cars.map((car, i) => (
                    <div className="item">
                      <br />
                      <br />
                      <div className="item">id: {i}</div>
                      <div className="item">????????: {+car.price / 10 ** 18}</div>
                      <div className="item">??????????????????: {car.category}</div>
                      <div className="item">???????? ????????????????????????: {car.srok}</div>
                    </div>
                  ))}
                  <button onClick={() => history.push("/add-car")}>
                    ???????????????? ????????????????????
                  </button>
                  <br />
                  <br />
                  {user.strah_vznos === "0" && user.len_car !== "0" && (
                    <button onClick={() => history.push("/add-strah")}>
                      ???????????????? ??????????????????
                    </button>
                  )}
                </>
              )}
            </div>
          </>
        )}
      </div>

      {(user.role === "0" || user.role === "1") && (
        <>
          <div className="messages" style={{ width: "10vw" }}>
            <div className="label">?????????????? ??????????????</div>
            {shtrafs.map((shtraf, i) => (
              <>
                <br />
                <div className="item">
                  ????????????????: {!shtraf.sost ? "????" : "??????"}
                </div>
                <div className="item">????????: {secondsToDate(+shtraf.time)}</div>
                {shtraf.sost && (
                  <button onClick={() => payShtraf(i)}>????????????????</button>
                )}
              </>
            ))}
            <br />
            <br />
            {user.role === "1" && (
              <button onClick={() => history.push("/create-shtraf")}>
                ?????????????? ??????????
              </button>
            )}
          </div>
          <div className="messages" style={{ width: "10vw" }}>
            <div className="label">?????????????? ??????</div>
            {dtps.map((dtp) => (
              <>
                <br />
                <div className="item">
                  ?????????? ??????????????:{" "}
                  {web3.utils.fromWei(dtp.summ.toString(), "ether")}
                </div>
                <div className="item">????????: {secondsToDate(+dtp.time)}</div>
              </>
            ))}
            <br />
            <br />
            {user.role === "1" && (
              <button onClick={() => history.push("/add-dtp")}>
                ?????????????? ??????
              </button>
            )}
          </div>
          <div className="messages" style={{ width: "10vw" }}>
            <div className="label">?????????????? ??????????????????</div>
            {messages.map((message) => (
              <>
                <br />
                <div className="item">??????????: {message.content}</div>
                <div className="item">????????: {secondsToDate(+message.time)}</div>
              </>
            ))}
          </div>
        </>
      )}
      {user.role === "1" && (
        <>
          <div className="messages" style={{ width: "20vw" }}>
            <div className="label">
              ???????????????????????? ?????????????????????????? ???? ????????????????????????
            </div>
            {inputs_drive
              .filter((input_Drive) => input_Drive.category !== "")
              .map((input_Drive, i) => (
                <>
                  <br />
                  <div className="item">??????: {input_Drive.FIO}</div>
                  <div className="item">??????????????????: {input_Drive.category}</div>
                  <div className="item">
                    ?????????? ?????????????????????????? ??????????????????????????:{" "}
                    {input_Drive.drive_number}
                  </div>
                  <div className="item">
                    ???????? ??????????????????: {secondsToDate(+input_Drive.srok)}
                  </div>
                  <div>
                    <button onClick={() => confirmDrive(i, true)}>
                      ??????????????
                    </button>
                    &nbsp;
                    <button onClick={() => confirmDrive(i, false)}>
                      ??????????????????
                    </button>
                  </div>
                </>
              ))}
          </div>
          <div className="messages" style={{ width: "20vw" }}>
            <div className="label">???????????????????????? ???????????????? ???? ????????????????????????</div>
            {inputs_car
              .filter(({ car }) => car.category !== "")
              .map(({ car, driver, license }, i) => (
                <>
                  <br />
                  <div className="item">??????: {driver.FIO}</div>
                  <div className="item">
                    ?????????????????? ????????????????????: {car.category}
                  </div>
                  <div className="item">
                    ?????????????????? ?????????????????????????? ??????????????????????????: {license.category}
                  </div>
                  <div>
                    <button onClick={() => confirmCar(i, true)}>??????????????</button>
                    &nbsp;
                    <button onClick={() => confirmCar(i, false)}>
                      ??????????????????
                    </button>
                  </div>
                </>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Profil;
