import { useState } from 'react';

function useFilterInput(initialValue) {
  const column = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const columnDel = [];
  const [value, setValue] = useState(initialValue);
  const [options, setOptions] = useState(column);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function selectOptions(string) {
    const array = options.filter((item) => item !== string);
    setOptions(array);
    setValue(array[0]);
  }

  function returnAllSelectOptions(string = column[0]) {
    setOptions(column);
    setValue(string);
  }

  function returnSelect(array, string) {
    const newArray = options;
    newArray.push(array[0]);
    const optionsValue = column.map((item) => newArray
      .find((element) => item === element)).filter((e) => e !== undefined);
    setOptions(optionsValue);
    if (string !== undefined) {
      setValue(string);
    } else {
      setValue(optionsValue[0]);
    }
  }

  return {
    options,
    columnDel,
    value,
    handleChange,
    selectOptions,
    setOptions,
    returnAllSelectOptions,
    returnSelect,
  };
}

export default useFilterInput;
