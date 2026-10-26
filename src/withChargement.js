function withChargement(WrappedComponent) {
  return function ComponentAvecChargement({ chargement, ...props }) {
    if (chargement) {
      return <p>Chargement en cours...</p>;
    }
    return <WrappedComponent {...props} />;
  };
}

export default withChargement;
