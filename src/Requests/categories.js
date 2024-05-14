import { loadCategoriesAction } from "../store/reducers/categoriesReducers"
import { domen } from "../domen"



export const getCategoriesList = (dispatch) => {

    fetch(`${domen}/categories/all`)
    .then(res =>res.json())
    .then(json => dispatch(loadCategoriesAction(json)))
     }