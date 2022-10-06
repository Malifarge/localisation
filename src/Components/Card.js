import {useEffect,useRef} from "react"

const Card = ({bar,selected}) =>{

    const ref=useRef()

    const {name,address,price,id} = bar

    useEffect(()=>{
        if(selected){
            ref.current.scrollIntoView({behavior: 'smooth'})
        }
    },[selected])

    return(
        
        <div className={`${selected.id===id && 'active'} Card`} ref={ref}>
            <h1>{name}</h1>
            <p>{address}</p>
            <p>price: {price}€</p>
        </div>
    )
}

export default Card