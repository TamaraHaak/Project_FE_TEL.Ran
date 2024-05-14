import React from 'react'
import ProductsOnSaleContainer from '../../components/ProductsOnSaleContainer'
import s from './index.module.css'
import backGroundImageHeader from './mediaMain/backGroundImageHeader.jpg'
import DiscountForm from '../../components/DiscountForm'
import { Link } from 'react-router-dom'
import CategoriesContainerMain from '../../components/CategoriesContainerMain'



export default function MainPage() {

  const background_styles = {
    backgroundImage: `url('${backGroundImageHeader}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div>  
    <header className={s.header} style={background_styles}> 
      <h1 style={{color: 'white'}}>Amazing Discounts <p/> on Garden Products!</h1>
      <button>Check out</button>
    </header>
        <header>
              <section className={s.object}>
                <div className={s.position} >
                    <h2 className={s.title}>Categories</h2>
                    <div className={s.dashContainer}>
                        <div className={s.dash}></div>
                        <Link to= {`/categories`}>
                        <div className={s.navCategories}>All categories</div>
                        </Link>
                    </div>
                  </div>
                    <div className={s.categoriesContainer}>
                      <CategoriesContainerMain/>
                    </div>
              </section>
                  <DiscountForm />
                      <section className={s.object}>
                      <div className={s.position} >
                              <h2 className={s.title}>Sale</h2>
                              <div className={s.dashContainer}>
                                <div className={s.dash}></div>
                                <Link to={`/allsales`}>
                                <div className={s.navOnSales}>All sales</div>
                                </Link>
                              </div>
                          </div>
                          <div className={s.productsOnSaleContainer}>
                            <ProductsOnSaleContainer/>
                          </div>
                      </section>
        </header>     
  </div>

  )
}