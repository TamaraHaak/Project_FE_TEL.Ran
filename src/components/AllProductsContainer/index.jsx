import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsOnSale } from '../../Requests/product';
import AllProductsCard from '../AllProductsCard';
import s from './index.module.css'



export default function AllProductsContainer() {

const dispatch = useDispatch();

useEffect(() => {
    dispatch(getProductsOnSale)
}, [])

const allProductsData =  useSelector(store => store.productsOnSales)



  return (
    <div className={s.allProductontainer}>
        {
            allProductsData.filter(el => el.visible)
            .map(el => <AllProductsCard key={el.id}{...el}/>)
        }
    </div>
  )
}