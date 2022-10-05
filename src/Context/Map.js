import { createContext,useState,useEffect } from "react";
import Bars from '../bars.json'

const MapContext = createContext({})

const MapContextProvider = ({children}) => {

    const [location, setLocation] = useState(null)

    const bars = Bars
    const value= {
        location: location,
        bars: bars
    }
}

return <MapContext.Provider value={value}>{children}</MapContext.Provider>

useEffect(()=>{
    navigator.geolocation.getCurrentPosition(position =>{
        setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        })
    },
    error =>{
        console.log(error);
    })
},[])

export {MapContext, MapContextProvider}