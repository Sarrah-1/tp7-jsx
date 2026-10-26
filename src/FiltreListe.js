import { useState } from 'react';

function FiltreListe({ items, render }) {
  const [recherche, setRecherche] = useState('');

  const itemsFiltres = items.filter((item) =>
    item.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Filtrer la liste..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />
      {render(itemsFiltres)}
    </div>
  );
}

export default FiltreListe;
