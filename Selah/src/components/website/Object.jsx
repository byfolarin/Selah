import { useState } from 'react';

function MyComponent() {
  const [person, setPerson] = useState({ greet: "Hey  Good morning" });

  const handleClick = () => {
    const newPerson = { ...person, greet: "Hello there" }; 
    setPerson(newPerson.concat("Hiya"));
  };

return (
    <div>
      <h1>{person.greet}</h1>
      <button onClick={handleClick}>Change Greet</button>
    </div>
  );
}

export default MyComponent;
