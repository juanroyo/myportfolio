import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../actions/cartActions'
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
//    let addedProductsForMongo = this.props.items._id;

    render(){
      const user = this.props.user;

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item=>{

                    return(
                        <li className="collection-item avatar" key={item._id}>
                                    <div className="item-img">
                                        <img src={`http://localhost:3000/Images/${item.img}`} alt={item.img} className=""/>
                                    </div>

                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p>
                                        <p>
                                            <b>Quantity: {item.quantity}</b>
                                        </p>
                                        {/*<div className="add-remove">
                                            <Link to="/cart"><i className="material-icons">arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons">arrow_drop_down</i></Link>
                                        </div>*/}

                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item._id)}}>Remove</button>
                                    </div>

                               </li>
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
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
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
