import React, { Component } from 'react'


export default class CheckboxForm extends Component {
    state = {
        ChannelName : "",
        subcricber :"",
        category:"",
        creationdate:"",
        About:"",
        gender:"",
        checkbox:false
    }

    FormChange = (event) =>{
       this.setState({
        [event.target.name]:event.target.value
       })
         
    }
  
    CheckBoxhandler = (event) => {
      this.setState({
        checkbox : event.target.checked
      })
    }
  render() {
    const {ChannelName,subcricber,category,creationdate,About,checkbox } = this.state
    return (
        <div className='container'>
        <input type="text" name='ChannelName' placeholder='Channel Name' className='form-control' onChange={this.FormChange} value={ChannelName} />
        <br />
        <input type="text" name='subcricber' placeholder='subcricber' className='form-control' onChange={this.FormChange} value={subcricber}/>
        <br />
        <select name="category" id="" onChange={this.FormChange} className='form-control' value={category} >
            <option value="select">Select</option>
            <option value="Programming">Programming</option>
            <option value="Css">CSS</option>
            <option value="Html">Html</option>
            <option value="Java">Java</option>
        </select>
        <br />
        <input type="date" name="creationdate" onChange={this.FormChange} className='form-control' value={creationdate} />
        <br />
        <textarea name="About"  onChange={this.FormChange} className='form-control' placeholder='tell me your channel' value={About} ></textarea>
        <br />
        <div>
            <input type="radio" value="Male" name='gender'  onChange={this.FormChange} />
            <label htmlFor="gender">Male</label>
            <input type="radio" value="Female"  name='gender'  onChange={this.FormChange} />
            <label htmlFor="gender">Female</label>
        </div>
        <br />
        <input type="checkbox" name="checkbox"  onChange={this.CheckBoxhandler} checked={checkbox}/>
        <label htmlFor="checkbox">I Agree & Continue</label>
        <br />
        <button className='btn btn-success' onClick={()=> console.log(this.state)}> Click </button>
      </div>
    )
  }
}
