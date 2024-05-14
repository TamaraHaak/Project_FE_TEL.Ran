import { createStore, combineReducers, applyMiddleware} from 'redux';
import { productsOnSaleReducer } from './reducers/productsOnSaleReducer';
import { thunk } from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducers';
import { productsByCategorieReducer } from './reducers/productsByCategorieReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { cartReducer } from './reducers/cartReducer';



const rootReducer = combineReducers({
mainCategories: categoriesReducer,
productsOnSales: productsOnSaleReducer,
productsByCategories: productsByCategorieReducer,
singleProduct: singleProductReducer,
cart: cartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));