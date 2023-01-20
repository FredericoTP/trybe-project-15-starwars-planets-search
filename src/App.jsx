import React from 'react';
import './App.css';
import Header from './components/Header';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Header />
    </PlanetsProvider>
  );
}

export default App;
