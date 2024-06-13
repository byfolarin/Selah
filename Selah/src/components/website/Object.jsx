import { useState } from 'react';

function MyComponent() {
  const [person, setPerson] = useState({ greet: "Hey Good morning" });

  const handleClick = () => {
    const newPerson = { ...person, meeting: "Hello there" }; // Directly update object
    setPerson(newPerson);
  };

  return (
    <div>
      <h1>{person.greet}</h1>
      <button onClick={handleClick}>Change Greet</button>
    </div>
  );
}

export default MyComponent;
