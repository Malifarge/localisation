import { createContext,useState,useEffect } from "react";
import Bars from '../bars.json'

const MapContext = createContext({})

const MapContextProvider = ({children}) => {

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(position =>{
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        },
        error =>{
            setLocation({
                lat:48.8534,
                lng:2.3488
            })
        })
    },[])

    const [location, setLocation] = useState(null)
    const [active,setactive] = useState('')

    const bars = Bars
    const value= {
        location: location,
        bars: bars,
        active:active,
        setactive: setactive
    }

    return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}


export {MapContext, MapContextProvider}