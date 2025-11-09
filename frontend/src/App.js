import starfield from './static/img/starfield1.jpg';
import './App.css';
import Table from './table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={starfield} className="App-starfield" alt="starfield" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
