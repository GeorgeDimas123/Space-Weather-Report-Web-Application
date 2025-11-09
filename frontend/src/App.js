import React, { useState, useEffect } from "react";
import starfield from './starfield1.jpg';
import './App.css';

// so that we can switch between local and deployed backend easily
const API_BASE_URL = process.env.REACT_APP_API_URL || "https://soleil.onrender.com";

function App() {
  const [cme, setCme] = useState(null);
  const [flare, setFlare] = useState(null);
  const [gst, setGst] = useState(null);
  const [ips, setIps] = useState(null);

  // Helper to fetch an event type
  const fetchEvent = async (endpoint, setState) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/events/${endpoint}`);
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setState(data);
    } catch (err) {
      console.error(`Failed to fetch ${endpoint}:`, err);
    }
  };

  useEffect(() => {
    fetchEvent("getcme", setCme);
    fetchEvent("getflr", setFlare);
    fetchEvent("getgst", setGst);
    fetchEvent("getips", setIps);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={starfield} className="App-starfield" alt="starfield" />
        <img src="/images/2D_starfield_detail_image.png" className="App-foreground" alt="foreground" />
        <h1>Welcome to Soleil!</h1>
        <h2>Soleil is the web application you need to monitor outer space's various weather phenomena</h2>

        <div className="space-weather-grid">

          <div className="coronal-mass-ejection">
            {cme ? (
              <>
                <h3>Coronal Mass Ejection (CME)</h3>
                <p>Time: {cme.eventTime || "N/A"}</p>
                <p>ID: {cme._ID || "N/A"}</p>
                <p>Source: {cme.sourceLocation || "N/A"}</p>
                <a href="https://en.wikipedia.org/wiki/Coronal_mass_ejection">Learn more about coronal mass ejections here!</a>
                <img src="/images/coronal_mass_ejection_image.png" alt="Coronal Mass Ejection Diagram" />
              </>
            ) : <p>Loading...</p>}
          </div>

          <div className="solar-flares">
            {flare ? (
              <>
                <h3>Solar Flare (FLR)</h3>
                <p>Time: {flare.eventTime || "N/A"}</p>
                <p>ID: {flare.flrID || "N/A"}</p>
                <p>Class: {flare.classType || "N/A"}</p>
                <p>Beginning type: {flare.beginTime || "N/A"}</p>
                <p>Peak Time: {flare.peakTime || "N/A"}</p>
                <p>Source Location: {flare.sourceLocation || "N/A"}</p>
                <p>Active Region Number: {flare.activeRegionNum || "N/A"}</p>
                <a href="https://science.nasa.gov/sun/solar-storms-and-flares/">Learn more about solar flares here!</a>
                <img src="/images/solar_flares_image.png" alt="solar flare diagram" />
              </>
            ) : <p>Loading...</p>}
          </div>

          <div className="geomagnetic-storms">
            {gst ? (
              <>
                <h3>Geomagnetic Storm (GST)</h3>
                <p>Time: {gst.eventTime || "N/A"}</p>
                <p>ID: {gst.gstID || "N/A"}</p>
                <p>Start Time: {gst.startTime || "N/A"}</p>
                <a href="https://en.wikipedia.org/wiki/Geomagnetic_storm">Learn more about geomagnetic storms here!</a>
                <img src="/images/geomagnetic_storms_image.png" alt="geomagnetic storm Diagram" />
              </>
            ) : <p>Loading...</p>}
          </div>

          <div className="interplanetary-shocks">
            {ips ? (
              <>
                <h3>Interplanetary Shock (IPS)</h3>
                <p>Time: {ips.eventTime || "N/A"}</p>
                <p>ID: {ips.activityID || "N/A"}</p>
                <p>Location: {ips.location || "N/A"}</p>
                <p>Catalog: {ips.catalog || "N/A"}</p>
                <a href="https://www.sciencedirect.com/topics/earth-and-planetary-sciences/interplanetary-shock-wave">Learn more about interplanetary shocks here!</a>
                <img src="/images/interplanetory_shock_image.png" alt="Interplanetary Shock Diagram" />
              </>
            ) : <p>Loading...</p>}
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
