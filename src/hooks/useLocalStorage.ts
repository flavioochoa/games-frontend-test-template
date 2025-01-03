const useLocalStorage = (key: string) => {
  const getValue = () => {
    const value = localStorage.getItem(key);
    return value;
  };

  const setValue = (value: string) => {
    localStorage.setItem(key, value);
  };

  return { getValue, setValue };
};

export default useLocalStorage;
