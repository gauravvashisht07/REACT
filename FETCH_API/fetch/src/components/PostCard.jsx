import React from "react";

 const PostCard= (props)=>{
     return(
        <>
        <h3>{props.title}</h3>
        <p>{props.id}</p>
        </>
     )
 }
 export default PostCard;