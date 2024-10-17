import React, { Component } from 'react'

class EventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:"Helloo"
      }

      this.clickHandler = this.clickHandler.bind(this)

    }


    clickHandler = ()=> {
        this.setState({
            message: "Goodbye"
        })
    }

    // clickHandler(){
    //     this.setState({
    //         message: "Goodbye"
    //     })
    // }
    

  render() {
    return (
      <div> 
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>Click</button>
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}

        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
      </div>
    )
  }
}

export default EventBinding
