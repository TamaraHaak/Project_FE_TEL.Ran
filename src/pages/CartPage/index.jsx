import React, { useState } from 'react'
import CartContainer from '../../components/CartContainer'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import s from './index.module.css'
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';



export default function CartPage() {

const [modalActive, setModalActive ] = useState(false);

const openModalWindow = () => setModalActive(true)
const closeModalWindow = () => setModalActive(false)
 
const cartState = useSelector(store => store.cart);

useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState))
}, [cartState]);

const totalPrice = cartState.reduce((acc, el) => acc + (el.price * el.count), 0)
  
const orderSubmit = event => {
    event.preventDefault();

const { name, phone_number, email } = event.target;

const userData = {
    name: name.value,
    phone_number: phone_number.value,
    email: email.value
  }

    event.target.reset()
  }

  const ItemsCount = new Set(cartState.map(item => item.id)).size;

  return (
    <div>
      <div className={s.line}></div>
          <div className={s.position}>
            <h2 className={s.title}>Shopping cart</h2>
            <Link to={'/'}>
               <p>Back to the store</p>
            </Link>
            <div className={s.dash}></div>
          </div>
      <Modal closeModalWindow={closeModalWindow} modalActive={modalActive}/>
      {cartState.length === 0 ? (
        <section>
          <p className={s.text}>Looks like you have no items in your basket currently</p>
          <Link to={'/'}>
            <button className={s.btn}>Continue Shopping</button>
          </Link>
        </section>
      ) : (
        <div className={s.block}>
          <CartContainer/>
          <form>
          <div className={s.order_form}>
            <span>Order details</span>
              <div className={s.totalText}>
                <p> {ItemsCount} items</p>
                <p>Total</p>
             </div>
            <div className={s.total_price}>${totalPrice}</div>
                <div className={s.inputs} onSubmit={orderSubmit}>
                  <input type="text" placeholder="Name" name="name" />
                  <input type="text" placeholder="Phone number" name="phone_number" />
                  <input type="text" placeholder="Email" name="email" />
                 <button onClick={openModalWindow} type="submit">Order</button> 
                </div>
            </div>
            </form>
          </div>
      )}
    </div>
  )
}