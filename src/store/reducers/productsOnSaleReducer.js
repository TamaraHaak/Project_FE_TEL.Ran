const defaultState = [];


const LOAD_PRODUCTS_ON_SALE = 'LOAD_PRODUCTS_ON_SALE'
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const CHECK_PRODUCTS = 'CHECK_PRODUCTS';
const CHECK_PRICE = 'CHECK_PRICE';

export const productSortAction = (value) => ({
    type: SORT_PRODUCTS, payload: value});

export const checkProductAction = value => ({
   type: CHECK_PRODUCTS, payload: value})

export const priceCheckAction = values => ({
    type: CHECK_PRICE, payload: values})

export const loadProductsOnSalesAction = product  =>({
     type:LOAD_PRODUCTS_ON_SALE, payload: product})

export const productsOnSaleReducer = (state = defaultState, action) =>{
if ( action.type === LOAD_PRODUCTS_ON_SALE ){
    return action.payload.map(el => ({...el, visible: true}))
} else if (action.type === SORT_PRODUCTS) {
    if (action.payload === 'name') {
       state.sort((a, b) => a.title.localeCompare(b.title))
    } else if(action.payload === 'price_asc') {
       state.sort((a, b) => a.price - b.price)
    } else if(action.payload === 'price_desc') {
       state.sort((a, b) => b.price - a.price)
    }
    return [...state]
 }else if (action.type === CHECK_PRODUCTS) {
    if(action.payload) {
       return state.map(el => {
          if(el.discont_price !== null) {
             el.visible = true
          } else if(el.discont_price === null) {
             el.visible = false
          }
          return el
       })
    } else {
       return state.map(el => {
          el.visible = true
          return el
       })
    }
 } else if(action.type === CHECK_PRICE) {
    const { min_value, max_value } = action.payload;
    state.forEach(el => {
       if((el.discont_price === null ? el.price : el.discont_price) >= min_value && 
          (el.discont_price === null ? el.price : el.discont_price) <= max_value) {
          el.visible = true;
       } else {
          el.visible = false;
       }
    });
    return [...state]
 }
 return state
}