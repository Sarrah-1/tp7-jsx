import { render, screen, fireEvent } from '@testing-library/react';
import FormulaireErreur from './FormulaireErreur';

test('affiche une erreur si le champ est vide', () => {
  render(<FormulaireErreur />);
  fireEvent.click(screen.getByText('Valider'));
  expect(screen.getByRole('alert')).toHaveTextContent('Le champ nom est obligatoire.');
});

test("n'affiche pas d'erreur si le champ est rempli", () => {
  render(<FormulaireErreur />);
  fireEvent.change(screen.getByLabelText('Nom :'), { target: { value: 'Sara' } });
  fireEvent.click(screen.getByText('Valider'));
  expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  expect(screen.getByText('Formulaire envoyé : Sara')).toBeInTheDocument();
});
