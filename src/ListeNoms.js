function ListeNoms({ noms }) {
  return (
    <ul>
      {noms.map((nom) => (
        <li key={nom}>{nom}</li>
      ))}
    </ul>
  );
}

export default ListeNoms;
