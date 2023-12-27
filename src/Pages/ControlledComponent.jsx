import React from 'react'

const literal = { 
    name:"partho",
    prof: "web",

}

function ControlledComponent() {
    // function submit(){
        
    // }
   
  return (
    <div className='container'>
      {/* <input type="text" placeholder='Uncontrolled Form' value="" onChange={}/> */}
      {/* Template literal */}

      <h1>{` My Name is : ${literal.name} , My prof is : ${literal.prof} `}</h1>
    </div>
  )
}

export default ControlledComponent
