import { render, screen } from '@testing-library/react';
import ButtonWithLogging from './ButtonWithLogging';
import withTimestamp from './withTimestamp';
import withChargement from './withChargement';
import Button from './Button';
import ListeNoms from './ListeNoms';

test('le HOC withLogging affiche les props dans la console', () => {
  const espion = jest.spyOn(console, 'log').mockImplementation(() => {});
  render(<ButtonWithLogging label="Cliquer ici" />);
  expect(espion).toHaveBeenCalledWith('Props reçues :', { label: 'Cliquer ici' });
  expect(screen.getByText('Cliquer ici')).toBeInTheDocument();
  espion.mockRestore();
});

test('le HOC withTimestamp ajoute une heure de rendu', () => {
  const ButtonAvecHeure = withTimestamp(Button);
  render(<ButtonAvecHeure label="Valider" />);
  expect(screen.getByText('Valider')).toBeInTheDocument();
  expect(screen.getByText(/Rendu à/)).toBeInTheDocument();
});

test('le HOC withChargement affiche un message pendant le chargement', () => {
  const ListeAvecChargement = withChargement(ListeNoms);
  render(<ListeAvecChargement chargement={true} noms={['Sara']} />);
  expect(screen.getByText('Chargement en cours...')).toBeInTheDocument();
  expect(screen.queryByText('Sara')).not.toBeInTheDocument();
});

test('le HOC withChargement affiche la liste une fois chargée', () => {
  const ListeAvecChargement = withChargement(ListeNoms);
  render(<ListeAvecChargement chargement={false} noms={['Sara']} />);
  expect(screen.getByText('Sara')).toBeInTheDocument();
});
