import React, { useState } from 'react';
import './App.css';

// Function to generate a random polynomial
const generateRandomPolynomial = (): string => {
  const a = Math.floor(Math.random() * 10) + 1; // Random coefficient
  const n = Math.floor(Math.random() * 5); // Random exponent
  return `${a}x^${n}`;
};

// Function to compute the antiderivative
const computeAntiderivative = (fx: string): string => {
  const match = fx.match(/(\d+)x\^(\d+)/);
  if (match) {
    const a = parseInt(match[1]);
    const n = parseInt(match[2]);
    const newCoefficient = a / (n + 1);
    const newExponent = n + 1;
    return `${newCoefficient}x^${newExponent} + C`;
  }
  return "Invalid function";
};

const App: React.FC = () => {
  const [fx, setFx] = useState<string>(generateRandomPolynomial());
  const [showResult, setShowResult] = useState<boolean>(false);

  // Function to regenerate a new random function
  const handleGenerateNewFunction = () => {
    setFx(generateRandomPolynomial());
    setShowResult(false); // Hide the result when a new function is generated
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  return (
    <div className="App">
      <h1>Beregn Stamfunktion</h1>
      <p>Funktion: {fx}</p>
      <button onClick={handleGenerateNewFunction}>Generer ny funktion</button>
      {!showResult ? (
        <button onClick={handleShowResult}>Vis resultat</button>
      ) : (
        <p>Stamfunktion: {computeAntiderivative(fx)}</p>
      )}
    </div>
  );
};

export default App;