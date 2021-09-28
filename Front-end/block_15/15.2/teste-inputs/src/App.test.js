import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByTestId } = render(<App />);
  
  const name = getByTestId('test-name');
  expect(name).toBeInTheDocument()
  expect(name).toHaveValue('')
  fireEvent.change(name, {target: {value: 'joao' } })
  expect(name).toHaveValue('joao')

  const email = getByTestId('test-email');
  expect(email).toBeInTheDocument()
  expect(email).toHaveValue('')
  fireEvent.change(email, {target: { value:'joaovtf39@gmail.com' } })
  expect(email).toHaveValue('joaovtf39@gmail.com')

});
