 import React, { Component } from 'react'
 
    //short key:rce
 export class Counter extends Component {

    //short key: rcons
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    // increment(){
    //     this.setState({
    //         count:this.state.count+1
    //     },()=>{
    //         console.log(this.state.count)
    //     })
    // }

    increment(){ 
        this.setState((prevState,props)=>({
            count:prevState.count+1
        }))
    }

    incrementFive(){
        this.increment()
        this.increment()

        this.increment()
        this.increment()

    }
    

   render() {
     return (
       <div>
         <h1>count =  {this.state.count}</h1>
         <button onClick={()=>this.incrementFive()} > increment</button>
       </div>
     )
   }
 }
 
 export default Counter
 