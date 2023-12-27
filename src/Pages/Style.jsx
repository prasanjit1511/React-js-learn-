import React from 'react'
import "./Style.css"

import ParthoStyles from "./partho.module.css"; 

function Style() {
    const ElementOne = {
        color:"red", 
        background:"green",
        textAlign:"center"
    }
  return (
    <div>
      <h1 style={ElementOne} > My fast Style component</h1>
      <h2 className='partho'> Welcome to Partho Programmer </h2>
      <h2 className={ParthoStyles.partho}> Welcome to Parthp Programmer </h2>

      <button className={ParthoStyles.partho1}> Hello Partho</button>

    </div>
  )
}

export default Style
