import React from 'react'
import { getCategoriesList } from '../../Requests/categories';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import s from './index.module.css'
import CategoryCard from '../CategoryCard';





export default function CategoryContainer() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCategoriesList)
  }, []);

  const categoriePageData = useSelector(store => store.mainCategories)
 

  return (
    
    <div className={s.category_comtainer}>
      {
        categoriePageData.map(el => <CategoryCard key={el.id} {...el} />)
      }
    </div>
  
  )
}