import React from 'react'

function Keyboard() {

    const onKeyDownText = () => {

        console.log("On Key down")
    }
    const onKeyUpText = () => {

        console.log("On Key up ")
    }
    const onKeyPressText = () => {

        console.log("On Key Press ")
    }
  return (
    <div>
        <br />
        <br />
      <h1> Keyboard Event </h1>
      <input type="text" onKeyDown={onKeyDownText} />
      <input type="text" onKeyUp={ onKeyUpText} />
      <input type="text" onKeyPress={onKeyPressText} />
      
    </div>
  )
}

export default Keyboard
