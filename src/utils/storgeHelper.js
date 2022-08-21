export const setStorage = (name, value) => {
  localStorage.setItem(`${name}`, `${value}`);
  return value;
};

export const getStoredValue = (name) => {
  const value = localStorage.getItem(`${name}`);
  return value;
};
