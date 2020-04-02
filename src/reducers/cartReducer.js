import Item1 from '../Images/item1.jpg'
import Item2 from '../Images/item2.jpg'
import Item3 from '../Images/item3.jpg'
import Item4 from '../Images/item4.jpg'
import Item5 from '../Images/item5.jpg'
import Item6 from '../Images/item6.jpg'
import {  ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../actions/action-types/cart-actions.js'


const initState = {
    items: [
        /*{id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}*/
    ],
    addedItems:[],
    total: 0

};
function initApp() {
  console.log("initApp");
  //this.GetMovies();
  GetMoviesFromMongo();
}

initApp()
function GetMoviesFromMongo(){
  console.log("la funcion")
  fetch("http://localhost:8080/shop")
      .then(res => res.json())
      .then(res => {
        initState.items = res;

        //this.setState({ Movie: res })
      });
}
const cartReducer= (state = initState,action)=>{
  //INSIDE HOME COMPONENT
  console.log(state)
      if(action.type === ADD_TO_CART){
            let addedItem = state.items.find(item=> item._id === action._id)
            console.log(addedItem = state.items.find(item=> item._id === action._id))
            //check if the action id exists in the addedItems
           let existed_item= state.addedItems.find(item=> action._id === item._id)
           if(existed_item)
           {
              addedItem.quantity += 1
               return{
                  ...state,
                   total: state.total + addedItem.price
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
    return state


}

export default cartReducer;
