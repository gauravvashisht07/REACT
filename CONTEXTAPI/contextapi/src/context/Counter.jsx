import React, { createContext, useState } from "react";

 export const CounterContext= createContext(null);

 export const CounterProvider=(props)=>{
    const [count, setCount]=usestate(0);

     return(
       <CounterContext.Provider value={{count}}>
        {props.children}
       </CounterContext.Provider>
     )
 } 