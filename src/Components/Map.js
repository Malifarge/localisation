import { useContext } from "react"
import { MapContainer, TileLayer} from 'react-leaflet'

import { MapContext } from "../Context/Map"

import Loader from "./Loader"
import Markers from "./Markers"

const Map = () =>{
    const {location,bars} = useContext(MapContext)
   
    if(!location){
        return( <Loader/>)
    }else{
        return(
            <MapContainer center={location} zoom={20} scrollWheelZoom={true} className='map'>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {bars.map((bar)=>{
                    return <Markers bar={bar} key={`${bar.name} ${bar.created_at}`}/>
                })}
            </MapContainer>
        )
    }
}

export default Map