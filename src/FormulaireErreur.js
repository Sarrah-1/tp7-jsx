import { useState } from 'react';

function FormulaireErreur() {
  const [nom, setNom] = useState('');
  const [erreur, setErreur] = useState('');
  const [envoye, setEnvoye] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom.trim()) {
      setErreur('Le champ nom est obligatoire.');
      setEnvoye(false);
      return;
    }
    setErreur('');
    setEnvoye(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nom-formulaire">Nom :</label>
      <input
        id="nom-formulaire"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <button type="submit">Valider</button>
      {erreur && (
        <p role="alert" className="erreur">
          {erreur}
        </p>
      )}
      {envoye && <p className="succes">Formulaire envoyé : {nom}</p>}
    </form>
  );
}

export default FormulaireErreur;
