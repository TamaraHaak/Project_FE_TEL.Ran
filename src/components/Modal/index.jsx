import React, { useState} from 'react'
import s from './index.module.css'
import closeSign from './media/delete.png'
import { useDispatch, useSelector } from 'react-redux'
import { clearBasketAction } from '../../store/reducers/cartReducer';
import CartCard from '../CartCard';




export default function Modal({closeModalWindow, modalActive}) {

const dispatch = useDispatch();
const [isProccessing, setIsProcessing] = useState(false);
const cartState = useSelector(store => store.cart);


    return (
        <div className={[s.modal, modalActive ? s.active : ''].join(' ')}>
          {isProccessing && (
          <section className={s.modal_content} >
          <div className={s.close} onClick={() => [setIsProcessing(false), dispatch(clearBasketAction())]}></div>
            <p>Congratulations!</p>
            <p>Your order has been successfully placed on the website.</p>
            <p>A manager will contact you shortly to confirm your order.</p>
            <img onClick={closeModalWindow} src={closeSign} alt="closeButton" />
            <div> {
            cartState.map(el => <CartCard key={el.id} {...el} />)
          }</div>
          </section>
          )}
        </div>
      );
    }