import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import planets from './mock.js/mockPlanets';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

describe('Teste App', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(planets)
    });
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Os filtros são renderizado corretamente', async () => {
    await act(() => render(<App />))

    const nameFilter = await screen.findByTestId("name-filter");
    const columnFilter = await screen.findByTestId("column-filter");
    const comparisonFilter = await screen.findByTestId("comparison-filter");
    const valueFilter = await screen.findByTestId("value-filter");
    const btnFilter = await screen.findByTestId("button-filter");
    const btnRemoveFilters = await screen.findByTestId("button-remove-filters");
    const columnSort = await screen.findByTestId("column-sort");
    const inputAsc = await screen.findByTestId("column-sort-input-asc");
    const inputDesc = await screen.findByTestId("column-sort-input-desc");
    const btnSort = await screen.findByTestId("column-sort-button");

    expect(nameFilter).toBeInTheDocument();
    expect(nameFilter).toHaveValue('');
    expect(columnFilter).toBeInTheDocument();
    expect(columnFilter).toHaveValue('population');
    expect(comparisonFilter).toBeInTheDocument();
    expect(comparisonFilter).toHaveValue('maior que');
    expect(valueFilter).toBeInTheDocument();
    expect(valueFilter).toHaveValue(0);
    expect(btnFilter).toBeInTheDocument();
    expect(btnRemoveFilters).toBeInTheDocument();
    expect(columnSort).toBeInTheDocument();
    expect(columnSort).toHaveValue('population');
    expect(inputAsc).toBeInTheDocument();
    expect(inputDesc).toBeInTheDocument();
    expect(btnSort).toBeInTheDocument();
  });

  test('verifica se os planetas são renderizados na tela', async () => {
    const planetsName = ['Tatooine', 'Alderaan', 'Yavin IV', 'Hoth', 'Dagobah', 'Bespin', 'Endor', 'Naboo', 'Coruscant', 'Kamino'];

    await act(() => render(<App />));

    const planets = await screen.findAllByTestId('planet-name');
    expect(planets).toHaveLength(10);
    planets.forEach((planet, index) => expect(planet).toHaveTextContent(planetsName[index]));
  });

  test('verifica o filtro por nome', async () => {
    await act(() => render(<App />));

    const nameFilter = await screen.findByTestId("name-filter");
    act(() => {
      userEvent.type(nameFilter, 'Tatooine');
    })

    const planets = await screen.findAllByTestId('planet-name');
    expect(nameFilter).toHaveValue('Tatooine');
    expect(planets).toHaveLength(1);
  });

  test('verifica o filtro numérico', async () => {
    await act(() => render(<App />));

    const columnFilter = await screen.findByTestId("column-filter");
    const comparisonFilter = await screen.findByTestId("comparison-filter");
    const valueFilter = await screen.findByTestId("value-filter");
    const btnFilter = await screen.findByTestId("button-filter");

    act(() => {
      userEvent.selectOptions(columnFilter, 'surface_water');
      userEvent.selectOptions(comparisonFilter, 'menor que');
      userEvent.type(valueFilter, '41');
      userEvent.click(btnFilter);
    })

    const planets = await screen.findAllByTestId('planet-name');
    expect(planets).toHaveLength(7);
  });
});
