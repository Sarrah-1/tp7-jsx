import { useState } from 'react';
import ListeNoms from './ListeNoms';
import withChargement from './withChargement';

const ListeNomsAvecChargement = withChargement(ListeNoms);

function DemoChargement() {
  const [chargement, setChargement] = useState(false);

  const recharger = () => {
    setChargement(true);
    setTimeout(() => setChargement(false), 1500);
  };

  return (
    <div>
      <button onClick={recharger}>Simuler un chargement</button>
      <ListeNomsAvecChargement
        chargement={chargement}
        noms={['Sara', 'Mohamed', 'Amine']}
      />
    </div>
  );
}

export default DemoChargement;
