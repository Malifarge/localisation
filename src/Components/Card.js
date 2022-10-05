import { useContext} from "react"
import { MapContext } from "../Context/Map"

const Card = ({bar}) =>{


    const {name,address,price} = bar

    const {active} = useContext(MapContext)
    return(
        <div className={`${active.name===name && 'active'} Card`}>
            <h1>{name}</h1>
            <p>{address}</p>
            <p>price: {price}€</p>
        </div>
    )
}

export default Card