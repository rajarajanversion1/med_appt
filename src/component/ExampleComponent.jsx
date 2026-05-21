import React, { useState, useEffect } from 'react';
const ExampleComponent = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    // When the component mounts, check if there's a 'name' value in Session Storage.
    const storedName = sessionStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);
  const handleInputChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    // Save the entered name to Session Storage.
    sessionStorage.setItem('name', newName);
    console.log('raja')
  };
  return (
    <div>
      <p>Name: {name}</p>
      <input type="text" value={name} onChange={handleInputChange} />
    </div>
  );
};
export default ExampleComponent;