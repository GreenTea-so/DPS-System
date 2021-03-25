const { useState } = require("react");

const useCustomState = (initState) => {
  const [state, setState] = useState(initState);

  const onChangeState = (name, value) => {
    setState({ ...state, [name]: value });
  };

  return {
    state,
    onChangeState,
  };
};

export default useCustomState;
