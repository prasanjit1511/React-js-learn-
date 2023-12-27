import React, { Component } from 'react'

export default class Form extends Component {
    FormChange = (event) =>{
        console.log(event.target.value)
         
    }
    FormChangee = (event) =>{
        console.log(event.target.value)
         //console.log(event.target.name)
    }
    CheckBoxhandler = (event) => {
      this.setState({
        checkBox : event.target.checked
      })
    }
  render() {
    return (
      <div className='container'>
        <input type="text" name='ChannelName' placeholder='Channel Name' className='form-control' onChange={this.FormChange} />
        <br />
        <br />
        <input type="text" name='subcricber' placeholder='subcricber' className='form-control' onChange={this.FormChange} />
        <br />
        <br />
        <select name="category" id="" onChange={this.FormChange} className='form-control'>
            <option value="Programming">Select</option>
            <option value="Programming">Programming</option>
            <option value="Css">CSS</option>
            <option value="Html">Html</option>
            <option value="Java">Java</option>
        </select>
        <br />
        <br />
        <input type="date" name="creationdate" onChange={this.FormChange} className='form-control' />
        <br />
        <br />
        <textarea name="texarea"  onChange={this.FormChange} className='form-control' placeholder='tell me your channel'></textarea>
        <br />
        <br />
        <div>
            <input type="radio" value="Male" name='gender'  onChange={this.FormChangee} />
            <label htmlFor="gender">Male</label>
            <input type="radio" value="Female"  name='gender'  onChange={this.FormChangee} />
            <label htmlFor="gender">Female</label>
        </div>
        <br />
        <br />
        <input type="checkbox" name="checkbox"  onChange={this.CheckBoxhandler}/>
      </div>
    )
  }
}
