import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import FilterContext from '../context/FilterContext';

function Table() {
  const { planets, keys } = useContext(PlanetsContext);
  const { filterName, click } = useContext(FilterContext);

  function filterMore(item) {
    const { value } = click;
    if (value.length > 0) {
      const filter = [];
      for (let index = 0; index < value.length; index += 1) {
        if ((value[index][1] === 'maior que')
         && item[value[index][0]] > +(value[index][2])) {
          filter.push(true);
        } else if ((value[index][1] === 'menor que')
        && item[value[index][0]] < +(value[index][2])) {
          filter.push(true);
        } else if ((value[index][1] === 'igual a')
        && item[value[index][0]] === value[index][2]) {
          filter.push(true);
        } else {
          filter.push(false);
        }
      }
      if (!filter.includes(false)) {
        return item;
      }
      return false;
    }
    return item;
  }

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
            .filter((item) => filterMore(item))
            // .filter((item) => (
            //   (click.value[1] === 'maior que' && item[click.value[0]] > +(click.value[2]))
            //    || ((click.value[1] === 'menor que')
            //     && item[click.value[0]] < +(click.value[2]))
            //    || (click.value[1] === 'igual a'
            //    && item[click.value[0]] === click.value[2])
            //    || ((click.value === ''))
            // ))
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
