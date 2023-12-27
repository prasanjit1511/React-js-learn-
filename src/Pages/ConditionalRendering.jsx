import React, { Component } from 'react'
import Fiter from './Fiter';

export default class ConditionalRendering extends Component {
    
constructor(props){

    super(props);

    this.state ={
        
       yourAge:true,
        
    }
}

  render() {
    let ami

    if(this.state.yourAge){

        ami = <h1>wecolme to partho house</h1>;

    }else{

        ami = <Fiter/>
    }

    return (
      <div>
        <h1>{ami}</h1>
      </div>
    )
  }
}
