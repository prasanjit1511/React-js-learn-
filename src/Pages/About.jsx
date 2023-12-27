import React, { Component } from 'react'

export default class About extends Component {

    constructor(props){
        super(props);
        this.state ={
            name:"Prasanjit Kumer Roy",
            age:25,

             pro:"devolper",

            prof:{
                prof1:"Web devoloper Partho",
                prof2:"Graphics Designer ",
                prof3:"Ui/ux Designer ",

            },

            proff:"Web"
        }
    }

    state = {
        name:"Partho",
        age:"25",
        profy:"Dev"
    }

    ChangeValue(a){
        this.setState({
                proff:"Devoloper"
        })
    }

    changeMind = this.ChangeValue.bind(this, this.a);

  render() {
    return (
      <div>
        <h1>Hello About</h1>
        <h1>  {"My Name Is :-" + this.state.name + "My Age Is :-" +this.state.age + "My profession is :" +this.state.pro}</h1>
        <br />

       <h1>  {"My Name Is :-" + this.state.name + "My Age Is :-" +this.state.age + "My profession is :" +this.state.profy}</h1> 

        <br />

        <h1>  { "My profession is :" +this.state.prof.prof1}</h1>

        <br />

        <h1>  { "My profession is :" +this.state.proff}</h1>
        <button onClick={this.changeMind}>CHange Value</button>

      </div>
    )
  }
}

//rcc