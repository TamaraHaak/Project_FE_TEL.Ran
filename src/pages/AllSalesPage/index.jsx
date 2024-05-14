import React from 'react';
import s from './index.module.css'
import AllProductsOnSalesContainer from '../../components/AllProductsOnSalesContainer'
import {  useDispatch, useSelector } from 'react-redux';
import { priceCheckAction, productSortAction} from '../../store/reducers/productsOnSaleReducer'
import { Link } from 'react-router-dom';



export default function AllSalesPage() {
  
  const dispatch = useDispatch();

  const productsBySaleState = useSelector(store =>store.productsOnSales )

  const order = event => {
    dispatch(productSortAction(event.target.value));
 }
 const check = event => {
    event.preventDefault();
    const { min_value, max_value } = event.target;
    const check_products = {
       min_value: min_value.value || 0,
       max_value: max_value.value || Infinity
    }
    dispatch(priceCheckAction(check_products));
    event.target.reset();
 }

 
  return (
    <div>
      <div>
       <hr class='solid' />
      </div>
      <div className={s.navigation}>
        <Link to={'/'}>
        <p className> Main page</p>
        </Link>
        <p>__</p>
        <p className={s.navigationAllSales}>All sales</p>
      </div>
      <div className={s.title}>
        <p>Discounted items</p>
      </div>
    
    <div className={s.sortContainer}>
        <div className={s.priceTitle}>
          <span>Price </span>
          <div>
              <form onSubmit={check}>
          <input className={s.formFrom}  type="text" placeholder="from" name="min_value"/>
          <input className={s.formTo} type="text" placeholder="to" name="max_value"/>
          <input className={s.submitbtn} type='submit'/>
              </form>
          </div>
    </div>

        <div className={s.sortedTitle}>
           <span>Sorted </span>
            <select onInput={order} className={s.byDefault}>
                <option value='by_default'>By default</option>
                <option value='name'>By name (A-Z)</option>
                <option value='price_asc'>By price (ASC)</option>
                <option value='price_desc'>By price (DESC)</option>
            </select>
        </div>
    </div>
    <AllProductsOnSalesContainer productsBySaleState ={productsBySaleState}/>  
  </div>
  
  )
  
}