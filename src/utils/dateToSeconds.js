export const dateToSeconds = (date) => {
  const newDate = new Date(date);
  const seconds = newDate.getTime() / 1000;
  return seconds
};
