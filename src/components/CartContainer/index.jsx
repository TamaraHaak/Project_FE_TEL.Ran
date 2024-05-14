import React  from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../CartCard'


export default function CartContainer() {

  
    const cartState = useSelector(store => store.cart)

  return (
    <div>
      
        {
            cartState.map(el => <CartCard key={el.id} {...el}/>)
        }
      
    </div>
  )
}