import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import logo from './media/logo_nav_menu.png'
import basket_buy from './media/icon_garden.png' 
import { useSelector } from 'react-redux'
import {IoMenu} from "react-icons/io5"

export default function NavMenu() {


  const cartState = useSelector(store => store.cart);

  const totalCount = cartState.reduce((acc, el ) => acc + el.count , 0)


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState))
  }, [cartState]);


  const basket_styles= {
    backgroundImage: `url('${basket_buy}')`

  }
    return (
    <header className={s.header}>
    <nav>
      <div className={s.logo_img}> 
        <img src={logo} alt='logo'/>
        </div>
    
    <div className={s.nav_menu}>
    <Link to='/'>Main Page</Link>
    <Link to='/categories'>Categories</Link>
    <Link to='/allproducts'>All products</Link>
    <Link to='/allsales'> All sales </Link></div>
    <Link to={'/cart'}><div className={s.basket} style={basket_styles}></div></Link>
    <Link to={'/'}><IoMenu className={s.menu_icon} /></Link>
    <p className={s.count}>{totalCount}</p>
    </nav>
    </header>
  )
}