import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('incrémente le compteur au clic', () => {
  render(<Counter />);
  const button = screen.getByText('+');
  fireEvent.click(button);
  expect(screen.getByText('Compteur : 1')).toBeInTheDocument();
});

test('décrémente le compteur au clic', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('-'));
  expect(screen.getByText('Compteur : -1')).toBeInTheDocument();
});

test('remet le compteur à zéro', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('Reset'));
  expect(screen.getByText('Compteur : 0')).toBeInTheDocument();
});
