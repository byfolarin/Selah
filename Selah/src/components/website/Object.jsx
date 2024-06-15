import { useState } from 'react';

function MyComponent() {
  const [person, setPerson] = useState({ greet: "Hey  Good morning" });

  const handleClick = () => {
    const newPerson = { ...person, greet: "Hello there" }; 
    setPerson(newPerson);
  };

return (
    <div>
      <h1>{person.greet}</h1>
      <button onClick={handleClick}>GET GREET</button>
    </div>
  );
}

export default MyComponent;
