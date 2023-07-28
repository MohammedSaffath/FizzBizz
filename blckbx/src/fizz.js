import React, { useState, useEffect } from 'react';
import './App.css'; 

const FizzBuzz = () => {
  const [numbers, setNumbers] = useState([]);

  // API call and recording the response
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/fizzbuzz')
      .then((response) => response.json())
      .then((data) => setNumbers(data))
      .catch((error) => console.error('Error fetching data1:', error));
  }, []);

  return (
    <div className="container">
    <h1 className="title">FizzBuzz by Mohammed Saffath</h1>
    <ul className="fizzbuzz-list">
      {numbers.map((number, index) => (
        <li key={index} className="fizzbuzz-item">
          {number}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default FizzBuzz;
