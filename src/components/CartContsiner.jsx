import React, { useEffect } from 'react'
import { useState } from 'react'
import Cartitem from './Cartitem'
import Total from './Total'

const CartContsiner = () => {
    let initialdata=[
        {id:1,title:"Noodes",price:30,qty:1},
        {id:2,title:"Biriyani",price:90,qty:2},
        {id:3,title:"Chips",price:10,qty:3},
    ]
let [data,setdata]=useState(initialdata)
let [total,settotal]=useState(0)
    let total1=(data.reduce((acc,el)=>{
        return acc+el.qty*el.price
    },0))
    useEffect(() => {
      settotal(total1)
    }, [data])

    let handleon=(id,value)=>{
        
        setdata(
            data.map((el)=>{

                if(el.id===id){
                    let x=el.qty+value
                    if(x!==0){
                   return {...el,qty:x}
                    }
                    else{
                        return el
                    }
                }
                else{
                    return el
                }
            })
        )

    }
  return (
    <div id="cartcantainer">
        {
            data.map((el)=><Cartitem key={el.id} itemdata={el} handleon={handleon}/>)
        }
        
        <Total total={total}/>
    </div>
  )
}

export default CartContsiner