import { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Filter() {
  const { filterName } = useContext(FilterContext);
  return (
    <div>
      <input
        data-testid="name-filter"
        placeholder="Nome"
        id="name-filter"
        type="text"
        value={ filterName.value }
        onChange={ filterName.handleChange }
      />
    </div>
  );
}

export default Filter;
