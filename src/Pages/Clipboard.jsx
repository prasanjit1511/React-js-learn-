import React from 'react'

function Clipboard() {

    const CopyText = () =>{

      alert("Text Copied")
    }

    const onCutText = () =>{

        alert("Text Cut Successful")
    }

    const onPastetext = () =>{

        document.write("Test Paste Done")
    }
  return (
    <div>
      <p onCopy={CopyText} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio mollitia fugiat magnam architecto enim deserunt accusantium adipisci suscipit, dolore vel explicabo odit nesciunt minus voluptates optio laudantium sint nam numquam.</p>

      <h1 onCut={onCutText}>This is ClipBoard page </h1>

      <input type="text" onPaste={onPastetext} placeholder='paste '/>
      <br />
      <br />
    </div>
  )
}

export default Clipboard
