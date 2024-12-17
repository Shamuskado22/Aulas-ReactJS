const List = () => {
  const itens = [
    {
      id: 1,
      name: 'Samuel',
    },
    {
      id: 2,
      name: 'Almeida',
    },
    {
      id: 3,
      name: 'Oliveira',
    },
  ];

  return (
    <div>
      {itens.map((item) => (
        <p key={item.id}>
          {item.id} - {item.name}
        </p>
      ))}
    </div>
  );
};

export default List;