function FirstComponent() {
  const name = 'Samuel';
  return (
    <div className="first-component">
      {/* Comentário no JSX */}
      <p>
        Primeiro Componente
      </p>
      {2 + 2}
      <p>Nome: {name}</p>
    </div>
  );
};

export default FirstComponent;