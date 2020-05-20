
import {  ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, DESTROY_SESSION } from '../actions/action-types/cart-actions.js'
//import initState from '/Users/juanroyo/Documents/MyPortfolio/my-app/src/Data/Data.js'


const initState = {
    items: [

    ],
    addedItems:[],
    total: 0

};
function initApp() {

  //this.GetMovies();
  GetMoviesFromMongo();
}

initApp()
function GetMoviesFromMongo(){

  fetch("https://ancient-oasis-38770.herokuapp.com/shop", {
  method: 'GET', // or 'PUT'
  
  headers:{
    'Content-Type': 'application/json'
  }
  }).then(res => res.json())
      .then(res => {
        initState.items = res;
      });
}

const cartReducer= (state = initState,action)=>{
  //INSIDE HOME COMPONENT

      if(action.type === ADD_TO_CART){
            let addedItem = state.items.find(item=> item._id === action._id)
            console.log(addedItem = state.items.find(item=> item._id === action._id))
//limite uno debe ser aqui
            //check if the action id exists in the addedItems
           let existed_item= state.addedItems.find(item=> action._id === item._id)
           if(existed_item)
           {
              addedItem.quantity += 1
               return{
                  ...state,
                   total: state.total,
                   quantity: addedItem.quantity = 1
                    }
          }
          else {
                      addedItem.quantity = 1;
                      //calculating the total
                      let newTotal = state.total + addedItem.price

                      return{
                          ...state,
                          addedItems: [...state.addedItems, addedItem],
                          total : newTotal
                      }

                  }
              }
              if(action.type === REMOVE_ITEM){
                  let itemToRemove= state.addedItems.find(item=> action._id === item._id)
                  let new_items = state.addedItems.filter(item=> action._id !== item._id)

                  //calculating the total
                  let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
                  console.log(itemToRemove)
                  return{
                      ...state,
                      addedItems: new_items,
                      total: newTotal
                  }
              }
  //INSIDE CART COMPONENT
   if(action.type=== ADD_QUANTITY){

       let addedItem = state.items.find(item=> item._id === action._id)
         addedItem.quantity += 1
         let newTotal = state.total + addedItem.price
         return{
             ...state,
             total: newTotal
         }
   }

   if(action.type=== SUB_QUANTITY){
           let addedItem = state.items.find(item=> item._id === action._id)
           //if the qt == 0 then it should be removed
           if(addedItem.quantity === 1){
               let new_items = state.addedItems.filter(item=>item._id !== action._id)
               let newTotal = state.total - addedItem.price
               return{
                   ...state,
                   addedItems: new_items,
                   total: newTotal
               }
           }
           else {
               addedItem.quantity -= 1
               let newTotal = state.total - addedItem.price
               return{
                   ...state,
                   total: newTotal
               }
           }
         }

          if(action.type=== DESTROY_SESSION){
            return{
            ...state,
            addedItems: 0,
            total: 0
          }
          }

    return state


}

export default cartReducer;
