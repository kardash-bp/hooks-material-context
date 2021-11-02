import { useState, useEffect } from "react";

const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      val = defaultValue;
    }
    return val;
  });
  useEffect(() => {
    if (state?.length > 0) {
      window.localStorage.setItem(key, JSON.stringify(state));
    } else {
      window.localStorage.removeItem(key);
    }
  }, [state, key]);
  return [state, setState];
};

export default useLocalStorageState;
