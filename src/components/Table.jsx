import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets, keys } = useContext(PlanetsContext);

  return (
    <table>
      <thead>
        <tr>
          {keys.map((item) => <th key={ item }>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          planets.map((planet) => (
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
