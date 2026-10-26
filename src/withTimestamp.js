function withTimestamp(WrappedComponent) {
  return function ComponentWithTimestamp(props) {
    const maintenant = new Date().toLocaleTimeString('fr-FR');
    return (
      <div>
        <WrappedComponent {...props} />
        <small>Rendu à {maintenant}</small>
      </div>
    );
  };
}

export default withTimestamp;
