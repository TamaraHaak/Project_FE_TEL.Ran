import { loadProductsByCategoriesAction } from "../store/reducers/productsByCategorieReducer"
import { domen } from "../domen"

export const getProductsByCategorie = (id) => {
    return dispatch=>{
    fetch(`${domen}/categories/${id}`)
    .then(res => res.json())
    .then(json => dispatch(loadProductsByCategoriesAction(json)))
    }}