import React from 'react';
import './App.css';
import Header from './components/Header';
import PlanetsProvider from './context/PlanetsProvider';
import FilterProvider from './context/FilterProvider';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  return (
    <PlanetsProvider>
      <FilterProvider>
        <Header />
        <Filter />
        <Table />
      </FilterProvider>
    </PlanetsProvider>
  );
}

export default App;
