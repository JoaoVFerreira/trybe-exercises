import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hoje vai ser só tapa de qualidade monstra!/i);
  expect(linkElement).toBeInTheDocument();
});
