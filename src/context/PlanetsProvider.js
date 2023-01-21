import PropTypes from 'prop-types';
import { useEffect } from 'react';
import PlanetsContext from './PlanetsContext';
import useFetch from '../hooks/useFetch';

function PlanetsProvider({ children }) {
  const { planets, fetchApi } = useFetch('https://swapi.dev/api/planets');

  let keys = [];

  useEffect(() => {
    const callApi = async () => {
      await fetchApi();
    };

    callApi();
  }, []);

  if (planets.length > 0) {
    keys = Object.keys(planets[0]);
  }

  return (
    <PlanetsContext.Provider value={ { planets, keys } }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
