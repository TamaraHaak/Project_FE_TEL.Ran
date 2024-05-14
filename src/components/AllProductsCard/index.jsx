import React from 'react'
import s from './index.module.css'
import { domen } from '../../domen'
import { Link } from 'react-router-dom'
import {addToCartAction} from '../../store/reducers/cartReducer'
import {useDispatch} from 'react-redux'


export default function AllProductsCard({id, image, title, discont_price, price}) {

  const addItemToCart = (e) => {
    e.preventDefault(); 
    dispatch(addToCartAction({ id, image, title, price })); 
  };

  
  const calculateDiscount = () => {
    if (discont_price === null) {
      return price; 
    } else {
      return discont_price; 
    };
  };  

  const dispatch = useDispatch()

  return (
    <Link to={`/product/${id}`}>
      <div className={s.productCard} >
        <img src={`${domen}${image}`} alt={title} />
          <div>
          <p className={s.productTitle}>{title}</p>
            <div className={s.productPrice}>
                <p className={s.firstPrice}>${calculateDiscount()}</p>
                {discont_price !== null && <p className={s.secondPrice}>${price}</p>}
            </div>
            {discont_price !== null && (
              <p className={s.productSale}>
                -{Math.floor(100 - (calculateDiscount() * 100 / price))}%
              </p>
            )}
            <button  onClick={addItemToCart}>Add to cart</button>
          </div>

      </div>
  </Link>
  )
}