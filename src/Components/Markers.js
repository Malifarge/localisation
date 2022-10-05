import { useContext } from "react"
import { MapContext } from "../Context/Map"

import {Marker,Popup } from 'react-leaflet'
import { Icon } from 'leaflet'

const markerIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.2/dist/images/marker-icon-2x.png',
  iconSize: [32, 50]
})

const Markers = ({bar})=>{

    const {setactive} = useContext(MapContext)

    const {latitude, longitude, name} = bar
    
    const position= [latitude, longitude]

    const handleEnterMarker = (name) => {
      setactive(name)
    }
    
        if(latitude && longitude){
          return(
          <Marker position={position} icon={markerIcon} opacity={0.8}>
          <Popup>
            <h1>{name}</h1>
            <button onClick={() =>handleEnterMarker({name})}>see</button>
          </Popup>
        </Marker>
        )}
}

export default Markers