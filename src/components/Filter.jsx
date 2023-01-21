import { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Filter() {
  const {
    filterName, column, columnFilter, comparisonFilter, valueFilter, click,
  } = useContext(FilterContext);
  return (
    <div>
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
      <div>
        <select
          data-testid="column-filter"
          onChange={ columnFilter.handleChange }
        >
          {column.map((item) => <option key={ item } value={ item }>{item}</option>)}
        </select>

        <select
          data-testid="comparison-filter"
          onChange={ comparisonFilter.handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          data-testid="value-filter"
          placeholder="Número"
          type="number"
          value={ valueFilter.value }
          onChange={ valueFilter.handleChange }
        />

        <button
          data-testid="button-filter"
          type="button"
          onClick={
            () => click.handleClickAdd([
              columnFilter.value, comparisonFilter.value, valueFilter.value])
          }
        >
          Add Filtro
        </button>
      </div>
      <div>
        {click.value.length > 0 && click.value.map((item, index) => (
          <div key={ index }>
            <p>{ `${item[0]} ${item[1]} ${item[2]}` }</p>
            <button
              type="button"
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
