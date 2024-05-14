import React from 'react'
import s from './index.module.css'
import { domen } from '../../domen'
import { Link } from 'react-router-dom'
import {addToCartAction } from '../../store/reducers/cartReducer'
import {useDispatch} from 'react-redux'





export default function AllProductsOnSalesCard({id, image, title, discont_price, price}) {

  const addItemToCart = (e) => {
    e.preventDefault(); 
    dispatch(addToCartAction({ id, image, title, price })); 
  };

  const dispatch = useDispatch()
 
  return (
    <Link to={`/product/${id}`}>
        <div className={s.productCard} >
          <img src={`${domen}${image}`} alt={title} />
            <div>
                <p> {title}</p>
                <p> ${discont_price}</p> 
                <p> ${price} </p> 
                <p>-{Math.floor(100-(discont_price*100/price))} %</p>
                <button  onClick={addItemToCart}>Add to cart</button>
            </div>
        </div>
    </Link>
    
  )
}