import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import App from '../App';

test('mainpage', () => {
  render(<App />);
  const linkElement = screen.getByText(/Your Portfolio/);
  expect(linkElement).toBeInTheDocument();
});
