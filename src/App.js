import { useState } from 'react';
import './App.css';

function App() {
  
  const randomNumber = Math.floor((Math.random() * 100) + 1 );

  console.log("The random number is " + randomNumber);
  const [guessedNumber, setGuessedNumber] = useState('');
  const [remainingAttempts, setRemainingAttempts] = useState(5);

  const handleGuess = () => {
    const parsedGuessedNumber = parseInt(guessedNumber);
    console.log('Guessed Number is ' + parsedGuessedNumber);
    if (remainingAttempts > 0 ) {
      if (parsedGuessedNumber <= 0 || parsedGuessedNumber > 100) {
        alert('The number should be between 1 and 100')
      } else if (parsedGuessedNumber === randomNumber) {
        alert('You won!');
      } else if (parsedGuessedNumber-randomNumber < 10) {
        alert('You are too close')
        setRemainingAttempts(remainingAttempts-1);
      } else if (parsedGuessedNumber-randomNumber < 20) {
        alert('You are close')
        setRemainingAttempts(remainingAttempts-1);
      } else if (parsedGuessedNumber-randomNumber < 30) {
        alert('You are far')
        setRemainingAttempts(remainingAttempts-1);
      }
    } else {
      alert('You have no more attempts!')
    }
    setGuessedNumber('');
  };

  const handleSurrender = () => {
    alert(`The number was ${randomNumber}. Better luck next time!`);
  };

  const handleHint = () => {
    alert(`The number is between ${randomNumber - 12} and ${randomNumber + 12}.`);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Guessing Game</h1>
      </header>
      <div className='App-body'>
        <h4>Find a number by entering it below</h4>
        <input type='number' placeholder='Enter a number from 1 to 100' className='form-control number-input' value={guessedNumber} onChange={(event) => setGuessedNumber(event.target.value)}/>
        <button type='submit' className='btn btn-primary buttons' onClick={handleGuess}>Submit</button>
        <div className='row-buttons'>
          <button className='btn btn-warning buttons' onClick={handleSurrender}>Surrender</button>
          <button className='btn btn-warning buttons' onClick={handleHint}>Hint</button>
        </div>
        <p>You have only {remainingAttempts} attempts, use it wisely 😉</p>
      </div>
    </div>
  );
}

export default App;
