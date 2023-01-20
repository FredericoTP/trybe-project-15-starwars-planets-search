import { useState } from 'react';

function useFilterInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    handleChange,
  };
}

export default useFilterInput;
