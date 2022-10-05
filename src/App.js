import { MapContextProvider } from './Context/Map';

import Map from './Components/Map';
import Article from './Components/Article';

import 'leaflet/dist/leaflet.css'
import './App.css';

const App = () => {

  return (
   <MapContextProvider>
      <section className="flex">
        <Article/>
        <Map/>
      </section>
   </MapContextProvider>
  );
}

export default App;
