import React, { useEffect } from 'react'
import AllProductsOnSalesCard from '../AllProductsOnsalesCard'
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsOnSale } from '../../Requests/product';

export default function AllProductsOnSalesContainer() {
   
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getProductsOnSale)
}, [dispatch] )

const allProductsOnSalesData =  useSelector(store => store.productsOnSales)


const producutsOnSales = allProductsOnSalesData.filter(el => el.discont_price !== null)

  return (
    <div className={s.salesContainer}>
        {
         producutsOnSales.filter(el => el.visible)
         .map(el => <AllProductsOnSalesCard key={el.id} {...el} />)
        }
    </div>
  )
}