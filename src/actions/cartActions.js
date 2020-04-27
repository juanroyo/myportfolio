import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,DESTROY_SESSION } from './action-types/cart-actions'
export const addToCart= (_id)=>{
  return{
        type: ADD_TO_CART,
             _id }
}

//remove item action
export const removeItem=(_id)=>{
    return{
        type: REMOVE_ITEM,
        _id
    }
}
//subtract qt action
export const subtractQuantity=(_id)=>{
    return{
        type: SUB_QUANTITY,
        _id
    }
}
//add qt action
export const addQuantity=(_id)=>{
    return{
        type: ADD_QUANTITY,
        _id
    }
}
export const onClear = () => {
    return { type: DESTROY_SESSION };
};
