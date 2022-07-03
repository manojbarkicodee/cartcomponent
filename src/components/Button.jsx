import React from 'react'

const Button = ({text,handleon,id1,value}) => {
  return (
    <button  onClick={()=>handleon(id1,value)} id="button">{text}</button>
  )
}

export default Button