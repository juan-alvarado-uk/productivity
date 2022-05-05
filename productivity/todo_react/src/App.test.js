import { render, screen } from '@testing-library/react';
import App from './App';

test('Titulo de la aplicación', () => {
  render(<App />);
  const linkElement = screen.getByText(/To-Do/i);
  expect(linkElement).toBeInTheDocument();
});

test( 'Botón para nueva categoría', () => {
  render(<App />);
  const new_button = screen.getByRole("button", { name: 'Nueva categoría' });
  expect(new_button).toBeInTheDocument();
});