
import React, { Component } from 'react'

export class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

     this.greetting = this.greetting.bind(this)
    }
   greetting(childName){
        alert("helllo "+{childName})
      }
    
x
  render() {
    return (
      <div> 
        <h1>{this.state.parentName}</h1>
        <ChildComponent greetHandler = {this.greetting}/>
      </div>
    )
  }
}

export default ParentComponent


function ChildComponent(props){
    return (
        <div>
        <button onClick={
          ()=>props.greetHandler("child")
        }>Greeting</button>
        </div>
    )
}

