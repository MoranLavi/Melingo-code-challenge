import React, { useState, useEffect } from 'react';

const SearchExample = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [examples, setExamples] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call the API to search for examples here
      const response = await fetch(`/api/examples?searchTerm=${searchTerm}`);
      const data = await response.json();
      setExamples(data.examples);
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search:
        <input type="text" value={searchTerm} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
      {examples.length > 0 &&
        <div>
          {examples.map(example => (
            <div key={example.id}>{example.text}</div>
          ))}
        </div>
      }
    </form>
  );
}

export default SearchExample;
