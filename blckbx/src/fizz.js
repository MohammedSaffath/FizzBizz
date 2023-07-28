import React, { useState, useEffect } from 'react';

const FizzBuzz = () => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/fizzbuzz')
      .then((response) => response.json())
      .then((data) => setNumbers(data))
      .catch((error) => console.error('Error fetching data1:', error));
  }, []);

  return (
    <div className="container">
      <h1>FizzBuzz </h1>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default FizzBuzz;
