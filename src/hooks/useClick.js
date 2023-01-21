import { useState } from 'react';

function useClick(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleClickSort(info) {
    setValue(info);
  }

  function handleClickAdd(info) {
    setValue([...value, info]);
  }

  function handleClickRemove(info) {
    const array = value.filter((item) => item[0] !== info[0]);
    setValue(array);
  }

  function handleClickRemoveAll() {
    setValue([]);
  }

  return {
    value,
    handleClickAdd,
    handleClickRemove,
    handleClickRemoveAll,
    handleClickSort,
  };
}

export default useClick;
