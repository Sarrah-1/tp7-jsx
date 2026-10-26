import React, { useState } from 'react';

function JSXDemo() {
  const [nom, setNom] = useState('');

  const elementJSX = <h1 className="titre">Bonjour JSX</h1>;

  const elementJS = React.createElement(
    'h1',
    { className: 'titre' },
    'Bonjour JavaScript pur'
  );

  return (
    <div>
      {elementJSX}
      {elementJS}
      <label htmlFor="champ">Entrez votre nom :</label>
      <input id="champ" value={nom} onChange={(e) => setNom(e.target.value)} />
      {nom && <p>Bonjour, {nom} !</p>}
    </div>
  );
}

export default JSXDemo;
