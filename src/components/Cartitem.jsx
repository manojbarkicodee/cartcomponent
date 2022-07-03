import React from 'react'

import Price from './Price'
import Quantity from './Quantity'

const Cartitem = ({itemdata,handleon}) => {
  return (
    <div id='cartitem'>
        <p>{itemdata.title}</p>
        <Price price={itemdata.price}/>
    <Quantity handleon={handleon} id="qty" id1={itemdata.id} qty={itemdata.qty}/>
    </div>
  )
}

export default Cartitem