const useValidator = (validators) => {
  const valid = (data) => {
    let step1 = false;
    let step2 = false;
    Object.keys(data).forEach((name) => {
      validators[name].forEach((validator) => {
        if (!validator.validator(data[name])) {
          alert(validator.error);
          step1 = true;
          return false;
        }
      });
      if (step1) {
        step2 = true;
        return false;
      }
    });
    if (step2) {
      return false;
    }
    return true;
  };
  return { valid };
};

export default useValidator;
