import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const reset = () => setValue("");
  const handleChange = (e) => setValue(e.target.value);

  return [value, reset, handleChange];
};

export default useInput;
