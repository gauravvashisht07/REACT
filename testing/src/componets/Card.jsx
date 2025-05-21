import React from "react"
const  Card =(props)=>{

    return(
        <>
        <h1>{props.title}</h1>
        <p>{props.id}</p>
        </>
    )
}
export default Card;