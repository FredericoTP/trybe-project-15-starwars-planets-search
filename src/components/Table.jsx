import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import FilterContext from '../context/FilterContext';

function Table() {
  const { planets, keys } = useContext(PlanetsContext);
  const { filterName } = useContext(FilterContext);

  return (
    <table>
      <thead>
        <tr>
          {keys.map((item) => <th key={ item }>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          planets.filter((planet) => (
            planet.name.toLowerCase()).includes(filterName.value.toLowerCase()))
            .map((planet) => (
              <tr key={ planet.name }>
                {
                  Object.values(planet).map((item, index) => (
                    <td key={ `${item}${index}` }>{item}</td>
                  ))
                }
              </tr>))
        }
      </tbody>
    </table>
  );
}

export default Table;
