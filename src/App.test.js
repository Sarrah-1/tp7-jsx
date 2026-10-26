import { render, screen } from '@testing-library/react';
import App from './App';

test("l'application affiche le titre principal", () => {
  render(<App />);
  expect(screen.getByText('TP JSX et Composition')).toBeInTheDocument();
});
