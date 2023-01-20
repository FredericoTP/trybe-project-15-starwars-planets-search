import { useState } from 'react';

function useFetch(url) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const removeResidents = data.results;
      removeResidents.map((item) => delete item.residents);
      setPlanets(removeResidents);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return {
    planets,
    loading,
    error,
    fetchApi,
  };
}

export default useFetch;
