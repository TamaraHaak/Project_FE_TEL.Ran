import React, {useState} from 'react'
import AllProductsContainer from '../../components/AllProductsContainer'
import { useDispatch, useSelector} from 'react-redux';
import s from './index.module.css'
import { checkProductAction, priceCheckAction, productSortAction} from '../../store/reducers/productsOnSaleReducer';
import { Link } from 'react-router-dom';


export default function AllProductPage() {

const [ checked, setChecked ] = useState(false);

const handleCheck = () => setChecked(!checked);


const dispatch = useDispatch();

const allProductsByState = useSelector(store =>store.productsOnSales )

const handleClick = e => dispatch(checkProductAction(e.target.checked));
   const order = event => {
      dispatch(productSortAction(event.target.value));
   }
   const check = event => {
      event.preventDefault();
      const { min_value, max_value } = event.target;
      const check_products = {
         min_value: parseFloat(min_value.value) || 0,
         max_value: parseFloat(max_value.value) || Infinity
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
        <p className>Main page</p>
        </Link>
        <p>__</p>
        <div></div>
        <p className={s.navigationAllSales}>All products</p>
      </div>
      <div className={s.title}>
        <p>All Products</p>
      </div>
      <div className={s.sortContainer}>
          <span className={s.priceTitle}>Price </span>
          <div>
              <form onSubmit={check} className={s.form} >
                <input className={s.formFrom}  type="text" placeholder="from" name="min_value"/>
                <input className={s.formTo} type="text" placeholder="to" name="max_value"/>
                <input type='submit'/>
              </form>
            </div>
        <div >
              <label className={s.sortedTitle}>
                <span>Discounted items</span>
                <input className={s.checkbox} type='checkbox' checked={checked} onChange={handleCheck}
                onClick={handleClick} />
              </label>
              <span className={s.sorted}>Sorted </span>
              <select onInput={order} className={s.byDefault}> 
                <option value='by_default'>by default</option>
                <option value='name'>By name (A-Z)</option>
                <option value='price_asc'>By price (ASC)</option>
                <option value='price_desc'>By price (DESC)</option>
              </select>
          </div>
    </div>
      <AllProductsContainer allProductsByState={allProductsByState} />
  </div>
  )
}