import { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Filter() {
  const {
    filterName,
    columnFilter,
    comparisonFilter,
    valueFilter, click, sortFilter, radioFilter, clickSort,
  } = useContext(FilterContext);

  function clickBtn() {
    click.handleClickAdd([
      columnFilter.value, comparisonFilter.value, valueFilter.value]);
    columnFilter.selectOptions(columnFilter.value);
    valueFilter.setValue('');
  }

  function clickBtnRemoveAll() {
    click.handleClickRemoveAll();
    if (columnFilter.value === undefined) {
      columnFilter.returnAllSelectOptions();
    } else {
      columnFilter.returnAllSelectOptions(columnFilter.value);
    }
  }

  function clickBtnRemove(item) {
    click.handleClickRemove(item);
    columnFilter.returnSelect(item, columnFilter.value);
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
            disabled={ columnFilter.value === undefined }
          >
            Add Filtro
          </button>
          <button
            data-testid="button-remove-filters"
            type="button"
            onClick={ clickBtnRemoveAll }
          >
            Remover todos
          </button>
        </div>
        <div>
          <select
            data-testid="column-sort"
            onChange={ sortFilter.handleChange }
          >
            {columnFilter.column
              .map((item) => <option key={ item } value={ item }>{item}</option>)}
          </select>

          <label htmlFor="column-sort-input-asc">
            Ascendente
            <input
              data-testid="column-sort-input-asc"
              name="sort"
              id="column-sort-input-asc"
              type="radio"
              value="ASC"
              onChange={ radioFilter.handleChange }
            />
          </label>
          <label htmlFor="column-sort-input-desc">
            Descendente
            <input
              data-testid="column-sort-input-desc"
              name="sort"
              id="column-sort-input-desc"
              type="radio"
              value="DESC"
              onChange={ radioFilter.handleChange }
            />
          </label>

          <button
            data-testid="column-sort-button"
            type="button"
            onClick={ () => clickSort.handleClickSort({
              column: sortFilter.value,
              sort: radioFilter.value,
            }) }
          >
            Ordenar
          </button>
        </div>
      </div>
      <div>
        {click.value.length > 0 && click.value.map((item, index) => (
          <div key={ index } data-testid="filter">
            <p>{ `${item[0]} ${item[1]} ${item[2]}` }</p>
            <button
              data-testid="button-remove"
              type="button"
              onClick={ () => clickBtnRemove(item) }
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
