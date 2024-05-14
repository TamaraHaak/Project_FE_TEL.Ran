const defaultState = [];


const CATEGORIES_ALL = 'CATEGORIES_ALL'


export const loadCategoriesAction = (categories)  =>
({ type:CATEGORIES_ALL, payload: categories})

export const categoriesReducer = (state = defaultState, action) =>
{
if ( action.type === CATEGORIES_ALL ) {
    return action.payload
}
return state
}