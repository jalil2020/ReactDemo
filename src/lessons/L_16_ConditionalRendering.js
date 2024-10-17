
import React, { Component } from 'react'

export class ConditionalRendering extends Component {
      constructor(props) {
      super(props)
    
      this.state = {
         isLogin:false
      }
    }
    

  render() {

    // return this.state.isLogin && <div> Hello </div>

    return  this.state.isLogin ? <div> User </div>
    : <div> Guest </div>
  }
}

export default ConditionalRendering
