
const Card = ({bar}) =>{

    const {name,address,price} = bar

    return(
        <div className="Card">
            <h1>{name}</h1>
            <p>{address}</p>
            <p>price: {price}</p>
        </div>
    )
}

export default Card