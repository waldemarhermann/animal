import AnimalShow from './AnimalShow';
import { useState } from 'react';

function getRandomAnimal() {
    const animals = ['cat', 'dog', 'gator', 'dog', 'cow', 'bird'];

    return animals[Math.floor(Math.random() * animals.length)]
}

const App = () => {
    const [animals, setAnimals] = useState([]);
    
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })

  return (
    <div>
        <button onClick={handleClick}>Add Animal</button>
        <div> {renderedAnimals} </div>
    </div>
  );
}

export default App;
