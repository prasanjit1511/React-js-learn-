import React from 'react'

function Focus() {
    const FocusText = () => {

           document.write("You have Focus on input")
    }
    const FocusBlue = () => {

           document.write("You have Focus Blur on input")
    }
  return (
    <div>
        <br />
        <br />
      <h1>Focus event</h1>

      <input type="text" onFocus={FocusText} />
      <br />
      <input type="text" onBlur={FocusBlue} />
    </div>
  )
}

export default Focus
