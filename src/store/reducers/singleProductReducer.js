const defaultState = [];

const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT';

export const loadSingleProductAction = product => ({ type: LOAD_SINGLE_PRODUCT, payload: product });


export const singleProductReducer = (state = defaultState, action) => {
  if(action.type === LOAD_SINGLE_PRODUCT){
    return action.payload 
  } return state
}