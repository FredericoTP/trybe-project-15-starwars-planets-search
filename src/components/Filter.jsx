import { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Filter() {
  const {
    filterName, columnFilter, comparisonFilter, valueFilter, click,
  } = useContext(FilterContext);

  function clickBtn() {
    click.handleClickAdd([
      columnFilter.value, comparisonFilter.value, valueFilter.value]);
    columnFilter.selectOptions(columnFilter.value);
  }

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
          disabled={ columnFilter.value === undefined }
        >
          {columnFilter.options
            .map((item) => <option key={ item } value={ item }>{item}</option>)}
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
          onClick={ () => clickBtn() }
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
