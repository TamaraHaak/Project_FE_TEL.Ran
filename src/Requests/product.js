import { loadProductsOnSalesAction } from "../store/reducers/productsOnSaleReducer"
import { domen } from "../domen"
import { loadSingleProductAction } from "../store/reducers/singleProductReducer"



export const getProductsOnSale = (dispatch) => {
    fetch(`${domen}/products/all`)
    .then(res =>res.json())
    .then(json => dispatch(loadProductsOnSalesAction(json)))
}

export const getSingleProduct = id => {
    return dispatch => {
      fetch(`${domen}/products/${id}`)
        .then(res => res.json())
        .then(json => dispatch(loadSingleProductAction(json)))
    }
  }