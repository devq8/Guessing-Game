import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Guessing Game</h1>
      </header>
      <div className='App-body'>
        <h4>Find a number by entering it below</h4>
        <input type='number' placeholder='Enter a number from 1 to 100' className='form-control number-input'/>
        <button type='submit' className='btn btn-primary buttons'>Submit</button>
        <div className='row-buttons'>
          <button className='btn btn-warning buttons'>Surrender</button>
          <button className='btn btn-warning buttons'>Hint</button>
        </div>
        <p>You have only 5 attempts, use it wisely 😉</p>
      </div>
    </div>
  );
}

export default App;
