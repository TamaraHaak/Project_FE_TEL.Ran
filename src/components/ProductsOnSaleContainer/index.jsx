import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsOnSale } from '../../Requests/product';
import ProductsOnSaleCard from '../ProductsOnSaleCard';
import s from './index.module.css'




export default function ProductsOnSaleContainer() {

const dispatch = useDispatch();

useEffect(() => {
    dispatch(getProductsOnSale)
}, [dispatch]);

const productsOnSaleData = useSelector(store => store.productsOnSales)


const productsWithSale = productsOnSaleData.filter(el => el.discont_price !== null)


const shuffledProductsOnSales = productsWithSale.sort(() => Math.random() - 0.5);

console.log(shuffledProductsOnSales);

const randomProductsOnsales = shuffledProductsOnSales.slice(0, 4);

  return (
    <div className={s.onSales_container}>
        {
        randomProductsOnsales.map(el=> <ProductsOnSaleCard key={el.id}{...el} /> )
        }
    </div>
  )
}