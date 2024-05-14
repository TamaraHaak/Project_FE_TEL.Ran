import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { getProductsByCategorie } from '../../Requests/productsByCategories';
import ProductsByCategorieContainer from '../../components/ProductsByCategorieContainer';

export default function ProductsByCategoriesPage() {

    const {categoryId} = useParams();
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsByCategorie(categoryId))
    }, [categoryId, dispatch])

    const productsByCategorieState = useSelector(store =>store.productsByCategories );
   
    return (
         <div>
               <div>
                  <hr class='solid' />
               </div>
             <div>
                <ProductsByCategorieContainer productsByCategorieState={productsByCategorieState}/>
            </div>
        </div>
    );  
};