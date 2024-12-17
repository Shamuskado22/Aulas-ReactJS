const OtherComponent = () => {
  const handleClick = () => {
    console.log('Botão Clicado!');
  };
  return (
    <div className="other-component">
      <p>Segundo Componente</p>
      <button onClick={handleClick}>Clique Aqui</button>
      <button onClick={() => console.log('Segundo Evento')}>Clique Aqui Também</button>
    </div>
  );
};

export default OtherComponent;