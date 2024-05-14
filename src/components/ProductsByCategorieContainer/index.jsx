import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsByCategorie } from '../../Requests/productsByCategories';
import ProductsByCategorieCard from '../ProductsByCategorieCard';
import s from './index.module.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { productCheckAction, productPriceCheckAction, productSortAction} from '../../store/reducers/productsByCategorieReducer';

export default function ProductsByCategorieContainer({productsByCategorieState}) {

    const dispatch = useDispatch();
    
    const { categoryId } = useParams();
    
    useEffect(() => {
        dispatch(getProductsByCategorie(categoryId));
    }, [categoryId, dispatch]);
   
    const {data, category} = productsByCategorieState;

    const [checked, setChecked] = useState(false);

    const handle_check = () => setChecked(!checked);

    const handle_click = e => dispatch(productCheckAction(e.target.checked))

    const order = event => {
      dispatch(productSortAction(event.target.value));}

    const check = event => {
      event.preventDefault();
      const { min_value, max_value } = event.target;
      const check_products = {
        min_value: parseFloat(min_value.value) || 0,
        max_value: parseFloat(max_value.value) || Infinity}

            dispatch(productPriceCheckAction(check_products));
            event.target.reset();
    }

    return (
    <div className={s.page}>
        <div className={s.navigation}>
            <Link to={'/'} className={s.link}>
                <div className={s.linkPage}>
                    <p>Main page</p>
                </div>
            </Link>
            <div className={s.line}></div>
            <Link to={'/categories'} className={s.link}>
                <div className={s.linkPage}>
                    <p>Categories</p>
                </div>
            </Link>
            <div className={s.line}></div>
            <div className={s.categoriesProductsName}> 
                <p>{category && category.title}</p>
            </div>
        </div>

        <div className={s.byCategoriesContainer}>

            <h2>{category && category.title}</h2>

            <section className={s.sortContainer}>
               <div className={s.priceContainer}>
                  <span className={s.priceTitle}>Price</span>
                  <form onSubmit={check} className={s.form}>
                     <input className={s.formInput} type="number" placeholder='from' name='min_value' />
                     <input className={s.formInput} type="number" placeholder='to' name='max_value' />
                     <input type='submit'/>
                  </form>
               </div>
               <div>
                  <label className={s.checkboxContainer}>
                    <span>Disconted Items</span>
                    <input type="checkbox" checked={checked} onChange={handle_check} onClick={handle_click}/>
                  </label>
               </div>
               <div className={s.sortedConteiner}>
                  <span className={s.sorted}>Sorted</span>
                  <select onClick={order} className={s.byDefault}>
                     <option value="default" defaultValue>by default</option>
                     <option value="name">by name (A-Z)</option>
                     <option value="price_asc">by price (ASC)</option>
                     <option value="price_desc">by price (DESC)</option>
                  </select>
               </div>
            </section>

            <div className={s.categoriesCards}>
                {data && data.filter(el => el.visible)
                .map(el => <ProductsByCategorieCard key={el.id} {...el} />)}
            </div>
        </div>
    </div>
    )
}