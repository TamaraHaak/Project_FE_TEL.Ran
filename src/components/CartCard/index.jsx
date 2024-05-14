import React from 'react'
import { domen } from '../../domen'
import {useDispatch} from 'react-redux'
import { decrCountAction, incrCountAction, deleteCartItemAction } from '../../store/reducers/cartReducer'
import s from './index.module.css'




export default function CartCard({id, image, title, price, discont_price, count}) {
    
    const newPrice = discont_price ? discont_price : null;

    const dispatch = useDispatch();
    

    return (
          <div className={s.card}>
                <img src={`${domen}${image}`} alt={title} />
                <div className={s.navigationBlock}>
                <h6 className={s.title}>{title}</h6>
                    <div className={s.buttons}>
                        <p onClick={() => dispatch(decrCountAction(id))}
                        >-</p>
                        <p> {count} </p>
                        <p onClick={() =>dispatch(incrCountAction(id))}
                        >+</p>
                        {newPrice == null ? '' : <p>${(count * newPrice).toFixed(2)}</p>}
                        <p>${(price*count).toFixed(2)} </p>
                    </div>
                    </div>
                <div className={s.button} onClick={()=>dispatch(deleteCartItemAction(id))}>X</div>
          </div>
      )
    }