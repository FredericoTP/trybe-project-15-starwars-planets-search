import { useState } from 'react';

function useClick(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleClickAdd(info) {
    setValue([...value, info]);
  }

  function handleClickRemove(info) {
    const array = value;
    array.splice(array.indexOf(info), 1);
    setValue([array]);
  }

  return {
    value,
    handleClickAdd,
    handleClickRemove,
  };
}

export default useClick;
