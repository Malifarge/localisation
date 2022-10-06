import { useContext } from "react"
import { MapContext } from "../Context/Map"


import Card from "./Card"

const Article = () =>{

    const {bars,active} = useContext(MapContext)

    return(
        <article className="flex clmn w100-30">
            {bars.map((bar)=>{
              return <Card bar={bar} selected={active.id===bar.id && active} key={bar.id}/>
            })}
        </article>
    )
}

export default Article