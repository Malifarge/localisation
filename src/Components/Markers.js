import {Marker,Popup } from 'react-leaflet'
import { Icon } from 'leaflet'

const markerIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.2/dist/images/marker-icon-2x.png',
  iconSize: [32, 50]
})

const Markers = ({bar})=>{

    const {latitude, longitude, name} = bar
    
    const position= [latitude, longitude]
    
        if(latitude && longitude){
          return(
          <Marker position={position} icon={markerIcon} opacity={0.8}>
          <Popup>
            <h1>{name}</h1>
          </Popup>
        </Marker>
        )}
}

export default Markers