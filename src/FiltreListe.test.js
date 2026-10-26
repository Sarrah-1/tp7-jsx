import { render, screen, fireEvent } from '@testing-library/react';
import FiltreListe from './FiltreListe';

const rendreListe = (items) => (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

test('affiche tous les éléments au départ', () => {
  render(<FiltreListe items={['Alice', 'Bob']} render={rendreListe} />);
  expect(screen.getByText('Alice')).toBeInTheDocument();
  expect(screen.getByText('Bob')).toBeInTheDocument();
});

test('filtre la liste selon la saisie', () => {
  render(<FiltreListe items={['Alice', 'Bob']} render={rendreListe} />);
  fireEvent.change(screen.getByPlaceholderText('Filtrer la liste...'), {
    target: { value: 'ali' }
  });
  expect(screen.getByText('Alice')).toBeInTheDocument();
  expect(screen.queryByText('Bob')).not.toBeInTheDocument();
});
