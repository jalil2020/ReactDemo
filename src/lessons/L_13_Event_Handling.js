 
 import React, { Component } from 'react'
 
 
 function FunctionCLick(){

    function clickHandler(){
        console.log("Button clicked")
    }

    return (
        <div>
          <button onClick={
           clickHandler
          }>
            button
            </button>  
        </div>
    )
 }

 export default FunctionCLick