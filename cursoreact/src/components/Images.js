import greyhound from '../assets/greyhound.jpg'

const Images = () => {
  return (
    <div>
      <img src="./pexels-pixabay-219906.jpg" alt="Alce no campo nevado" width="300"/>
      <img src={greyhound} alt="Cachorro correndo" width="300"/>
    </div>
  );
};

export default Images;