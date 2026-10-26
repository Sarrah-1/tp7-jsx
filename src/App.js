import './App.css';
import JSXDemo from './JSXDemo';
import ButtonWithLogging from './ButtonWithLogging';
import withTimestamp from './withTimestamp';
import Button from './Button';
import DataLoader from './DataLoader';
import FiltreListe from './FiltreListe';
import FormulaireErreur from './FormulaireErreur';
import Greeting from './Greeting';
import Counter from './Counter';
import DemoChargement from './DemoChargement';

const ButtonAvecHeure = withTimestamp(Button);

function App() {
  return (
    <div className="App">
      <h1>TP JSX et Composition</h1>

      <section>
        <h2>JSX et JavaScript pur</h2>
        <JSXDemo />
      </section>

      <section>
        <h2>HOC : withLogging</h2>
        <ButtonWithLogging label="Cliquer ici" />
      </section>

      <section>
        <h2>HOC : withTimestamp</h2>
        <ButtonAvecHeure label="Bouton avec heure" />
      </section>

      <section>
        <h2>Render Props : DataLoader</h2>
        <DataLoader
          render={(data) => (
            <ul>
              {data.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          )}
        />
      </section>

      <section>
        <h2>Render Props : filtre de liste</h2>
        <FiltreListe
          items={['Alice', 'Bob', 'Charlie', 'Sara', 'Mohamed']}
          render={(items) => (
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        />
      </section>

      <section>
        <h2>Composants testés</h2>
        <Greeting name="Alice" />
        <Counter />
      </section>

      <section>
        <h2>Formulaire avec erreur</h2>
        <FormulaireErreur />
      </section>

      <section>
        <h2>Ma partie : HOC withChargement</h2>
        <DemoChargement />
      </section>
    </div>
  );
}

export default App;
