import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import FilterContext from '../context/FilterContext';
import Loading from './Loading';
import '../style/Table.css';

function Table() {
  const { planets, keys, loading } = useContext(PlanetsContext);
  const { filterName, click, clickSort } = useContext(FilterContext);
  const NUMBER = -1;

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

  function sortFilter(a, b) {
    if (clickSort.value.column && clickSort.value.sort === 'ASC') {
      if (!a[clickSort.value.column].includes('unknown')
      && b[clickSort.value.column].includes('unknown')) {
        return NUMBER;
      }
      if (a[clickSort.value.column].includes('unknown')
      && !b[clickSort.value.column].includes('unknown')) {
        return 1;
      }
      return a[clickSort.value.column] - b[clickSort.value.column];
    }
    if (clickSort.value.column && clickSort.value.sort === 'DESC') {
      return b[clickSort.value.column] - a[clickSort.value.column];
    }
    return a;
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="table-content">
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
              .sort((a, b) => sortFilter(a, b))
              .map((planet) => (
                <tr key={ planet.name }>
                  {
                    Object.values(planet).map((item, index) => {
                      if (planet.name === item) {
                        return (
                          <td
                            data-testid="planet-name"
                            key={ `${item}${index}` }
                          >
                            {item}
                          </td>
                        );
                      } return (
                        <td
                          key={ `${item}${index}` }
                        >
                          {item}
                        </td>
                      );
                    })
                  }
                </tr>))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
