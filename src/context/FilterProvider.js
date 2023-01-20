import PropTypes from 'prop-types';
import FilterContext from './FilterContext';
import useFilterInput from '../hooks/useFilterInput';
import useClick from '../hooks/useClick';

function FilterProvider({ children }) {
  const filterName = useFilterInput('');
  const columnFilter = useFilterInput('population');
  const comparisonFilter = useFilterInput('maior que');
  const valueFilter = useFilterInput(0);
  const click = useClick('');
  const column = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  return (
    <FilterContext.Provider
      value={ { filterName, column, columnFilter, comparisonFilter, valueFilter, click } }
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;

FilterProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};