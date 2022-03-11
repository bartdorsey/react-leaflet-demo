import './App.css';
import { MapContainer } from "react-leaflet"
import Map from './Map.js';

function App() {

  return (
    <div className="App">
      <MapContainer className="map" center={[0,0]} zoom={13}>
        <Map/>
      </MapContainer>
    </div>
  )
}

export default App;
