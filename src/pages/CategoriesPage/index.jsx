import React from 'react'
import CategoryContainer from '../../components/CategoryContainer'
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function CategoriesPage() {

 return (
  <div>
    <hr />
        <div className={s.navigation}>
          <div className={s.navigationMainPage}>
            <Link to={'/'}>
              <p>Main page</p>
            </Link>
            <p>__</p>
        </div>
            <div className={s.navigationCategories}>
             <p>Categories</p>
           </div>
        </div>
         <h2 className={s.categoriesTitle}>Categories</h2>
         <div className={s.container}>
            <CategoryContainer />
         </div>
</div>
);
}