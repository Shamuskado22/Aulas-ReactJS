import { useState, useEffect } from 'react';

const Hooks = () => {
  let idade = 29
  const [novaIdade, setNovaIdade] = useState(40);

  const changeAge = () => {
    idade = 30;
  };

  const changeNewAge = () => {
    setNovaIdade(45)
  };

  useEffect(() => {
    console.log('Testando!')
  })

  return (
    <div>
      <p>
        Idade: {idade}
      </p>
      <button onClick={changeAge}>Mudar a idade</button><p>
        Idade: {novaIdade}
      </p>
      <button onClick={changeNewAge}>Mudar a idade</button>
    </div>
  );
};

export default Hooks;