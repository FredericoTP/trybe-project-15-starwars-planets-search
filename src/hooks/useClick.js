import { useState } from 'react';

function useClick(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleClick(info) {
    setValue(info);
  }

  return {
    value,
    handleClick,
  };
}

export default useClick;
