import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesList } from '../../Requests/categories';
import { useEffect } from 'react';
import s from './index.module.css'
import CategoriesCardMain from '../CategoriesCardMain';





export default function CategoriesContainerMain() {

  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(getCategoriesList)
  }, []);
  

  const categoriesMain = useSelector(store => store.mainCategories)
  return (
    
    <div className={s.categories_container}>
      {
        categoriesMain.slice(0,4).map(el => <CategoriesCardMain key={el.id} {...el} />)
      }
    </div>
    

  )
}