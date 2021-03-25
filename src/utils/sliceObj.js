export const sliceObj = (obj) => {
  const newObj = { ...obj };
  const keys = Object.keys(newObj).reverse();
  keys.slice(keys.length / 2).forEach((item) => {
    delete newObj[item];
  });
  return newObj;
};
