import starfield from './starfield1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={starfield} className="App-starfield" alt="starfield" />
        <h1>Welcome to Soleil!</h1>
        <h2>Soleil is the web application you need to monitor outer space's various weather phenomena</h2>

        <div className="space-weather-grid">

        <div class="phenomenon">
          <h3>Coronal Mass Ejection</h3>
          <div className="coronal-mass-ejection"></div>
          <img class="image1" src="images/coronal_mass_ejection_image.png" alt="cme_image"></img>
        </div>

        <div className="solar-flares"></div>

        <div className="geomagnetic-storms"></div>

        <div className="interplanetary-shocks"></div>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}
export default App;
