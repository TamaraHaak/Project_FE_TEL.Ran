import React, { useEffect, useState } from 'react'
import { domen } from '../../domen'
import s from './index.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { addSingleProductAction} from '../../store/reducers/cartReducer'
import { getCategoriesList } from '../../Requests/categories'
import { Link } from 'react-router-dom'


export default function SingleProductCard({id, categoryId, title, image, discont_price , price, description}) {

    const img = domen+image;

    const dispatch = useDispatch();

    const categories_data = useSelector(store => store.mainCategories)

    useEffect(() =>{
      dispatch(getCategoriesList)
  }, []);

    const get_category_title = categoryId => {
        const category = categories_data.find(el => el.id === categoryId);
        return category && category.title;
     }


     const [error, setErrorMessage] = useState('');
     const [count, setCount] = useState(0);
     
     const incr_count = () => {
        setCount(count + 1);
     };
     const decr_count = () => {
        if (count > 0) {
           setCount(count - 1);
        }
     };
     const add_to_cart = () => {
        if (count === 0) {
           setErrorMessage("Unable to order 0 quantity");
           return;
        }
        dispatch(addSingleProductAction({id, image, title, price, discont_price, count}))
        setErrorMessage(''); setCount(0);
     };

     const availableDiscount = () => {
      if (discont_price === null) {
        return price; 
      } else {
        return discont_price; 
      };
    };
    
  return (
    <div className={s.page}>
         <section className={s.navigation}>
            <Link to='/' className={s.link}>
               <div className={s.linkPage}> 
                    <p>Main page</p>
               </div>
            </Link>
            <div className={s.line}></div>
            <Link to='/categories' className={s.link}>
               <div className={s.linkPage}> 
                     <p>Categories</p>
               </div>
            </Link>
            <div className={s.line}></div>
            <Link to={`/categories/${categoryId}`} className={s.link}>
                <div className={s.linkPage}>
                        <div>{categories_data.length > 0 ? get_category_title(categoryId) : 'Loading...'}</div>
               </div>
            </Link>
            <div className={s.line}></div>
            <div className={s.singleProductLink}> { title } </div>
         </section>
    <div className={s.productCard}>
            <img src={img} alt={title} />
                <div className={s.textPosition}>
                    <h3> {title} </h3>
                    <section className={s.PricesAndDiscounts}>
                        <p> ${availableDiscount()}</p> 
                       {discont_price !== null && <p>${price}</p>}
                       {discont_price !== null && (
                    <p>
                -{Math.floor(100-(availableDiscount() * 100 / price))}%
                   </p> )}
                    </section>
                            <section className={s.cartFunction}>
                                <div className={s.addOrDeleteForm}>
                                    <span className={s.square} onClick={decr_count}>-</span>
                                    <span>{count}</span>
                                    <span className={s.square} onClick={incr_count}>+</span>
                               </div>
                               <button onClick={add_to_cart}> Add to cart </button>
                               </section>
                                 <div className={s.errorr}>
                                  <p style={{ color: 'black' }}>{error}</p>
                                 </div>
                            
                                    <section className={s.blockfooter}>
                                        <h3>Description</h3>
                                        <p className={s.description}>{description}</p>
                                        <p>Read more</p>
                                    </section>
                </div>
    </div>
</div>
  )
}