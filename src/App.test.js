import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders App global container', () => {
  const { getByTitle } = render(<App />);
  const element = getByTitle("app-container");
  expect(element).toBeInTheDocument();
});
