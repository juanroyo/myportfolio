import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity, onClear} from '../actions/cartActions'
import Recipe from '../Recipe.js'

class Cart extends Component{

  handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    handleClear = ()=>{
        this.props.onClear();
    }
//    let addedProductsForMongo = this.props.items._id;

    render(){
      const user = this.props.user;

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item=>{

                    return(

                      <tr>
                         <th scope="row" class="border-0">
                           <div class="p-2" >
                             <img src={`http://localhost:3000/Images/${item.img}`} alt={item.img} width="70" class="img-fluid rounded shadow-sm"/>
                             <div class="ml-3 d-inline-block align-middle">
                               <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">{item.title}</a></h5><span class="text-muted font-weight-normal font-italic d-block">{item.genre}</span>
                             </div>
                           </div>
                         </th>
                         <td class="border-0 align-middle"><strong>{item.price}</strong></td>
                         <td class="border-0 align-middle"><strong>{item.quantity}</strong></td>
                         <td class="border-0 align-middle"><button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item._id)}}>Remove</button></td>
                       </tr>
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
         <div class="pb-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

               <div class="table-responsive">
               <table class="table">
                 <thead>
                   <tr>
                     <th scope="col" class="border-0 bg-light">
                       <div class="p-2 px-3 text-uppercase">Product</div>
                     </th>
                     <th scope="col" class="border-0 bg-light">
                       <div class="py-2 text-uppercase">Price</div>
                     </th>
                     <th scope="col" class="border-0 bg-light">
                       <div class="py-2 text-uppercase">Quantity</div>
                     </th>
                     <th scope="col" class="border-0 bg-light">
                       <div class="py-2 text-uppercase">Remove</div>
                     </th>
                   </tr>
                 </thead>
                   <tbody>
                              {addedItems}

      </tbody>

                  </table>
            </div>
            </div>
            </div>
            </div>
          <Recipe user={user} />
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))},
        onClear: (id)=>{dispatch(onClear())},

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
