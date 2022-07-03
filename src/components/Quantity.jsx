import React from 'react'
import Button from './Button'

const Quantity = ({qty,id1,handleon}) => {
  return (
    <div id="qty">
        <Button   handleon={handleon} value={+1} id1={id1}text={"+"}></Button>{qty}<Button handleon={handleon} id1={id1} value={-1} text={"-"}></Button>
    </div>
  )
}

export default Quantity