import { useContext } from "react"
import { MapContext } from "../Context/Map"

import {Marker, Tooltip } from 'react-leaflet'
import { Icon } from 'leaflet'

const markerIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.2/dist/images/marker-icon-2x.png',
  iconSize: [32, 50]
})

const Markers = ({bar})=>{

    const {setactive} = useContext(MapContext)

    const {latitude, longitude, name} = bar
    
    const position= [latitude, longitude]

    const handleEnterMarker = (bar) => {
      setactive(bar)
    }
    
        if(latitude && longitude){
          return(
          <Marker position={position} icon={markerIcon} opacity={0.8} eventHandlers={{
            mouseover: ()=>{
              handleEnterMarker(bar)
            }
          }}>
          <Tooltip>
            <h1>{name}</h1>
          </Tooltip>
        </Marker>
        )}
}

export default Markers