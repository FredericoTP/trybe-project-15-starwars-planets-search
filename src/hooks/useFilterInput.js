import { useState } from 'react';

function useFilterInput(initialValue) {
  const column = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const columnDel = [];
  const [value, setValue] = useState(initialValue);
  const [options, setOptions] = useState(column);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const selectOptions = (string) => {
    const array = options.filter((item) => item !== string);
    setOptions(array);
    setValue(array[0]);
  };

  return {
    options,
    columnDel,
    value,
    handleChange,
    selectOptions,
    setOptions,
  };
}

export default useFilterInput;
