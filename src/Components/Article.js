import { useContext } from "react"
import { MapContext } from "../Context/Map"


import Card from "./Card"

const Article = () =>{

    const {bars} = useContext(MapContext)

    return(
        <article className="flex clmn w100-30">
            {bars.map((bar)=>{
              return <Card bar={bar} key={`${bar.name} ${bar.created_at}`}/>
            })}
        </article>
    )
}

export default Article