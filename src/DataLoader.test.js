import { render, screen } from '@testing-library/react';
import DataLoader from './DataLoader';

test('DataLoader transmet les données à la fonction render', () => {
  render(
    <DataLoader
      render={(data) => (
        <ul>
          {data.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
    />
  );
  expect(screen.getByText('Alice')).toBeInTheDocument();
  expect(screen.getByText('Bob')).toBeInTheDocument();
  expect(screen.getByText('Charlie')).toBeInTheDocument();
});
