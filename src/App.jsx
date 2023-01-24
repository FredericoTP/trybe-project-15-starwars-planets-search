import React from 'react';
import './style/App.css';
import Header from './components/Header';
import PlanetsProvider from './context/PlanetsProvider';
import FilterProvider from './context/FilterProvider';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  return (
    <PlanetsProvider>
      <FilterProvider>
        <div className="main-container">
          <Header />
          <Filter />
          <Table />
        </div>
      </FilterProvider>
    </PlanetsProvider>
  );
}

export default App;
