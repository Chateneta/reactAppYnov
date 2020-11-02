import React from 'react';


export function Btn({getData, classN, children}){
    return(
    <button onClick={getData} className={classN} >{children}</button>
    )
}