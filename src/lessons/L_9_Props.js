import React from "react";

const PropComponent = (props) =>{
    return (
        <div>
         <h1>Hello dev {props.name} Hero name {props.heroName}</h1>
        {props.children}
        </div>
    )
}

export default PropComponent 