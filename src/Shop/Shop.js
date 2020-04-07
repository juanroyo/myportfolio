import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom';
import { addToCart } from '../actions/cartActions'

class Shop extends Component{

  handleClick = (_id) => {
        this.props.addToCart(_id);
    }

  render(){
        let itemList = this.props.items.map(item=>{
            return(

                <div className="card" key={item._id}>
              
                  {console.log(item._id)}
                        <div className="card-image">
                            <img src={item.img}/>
                          {/*  <img src={item.img} alt={item.title}/>*/}
                            <span className="card-title">{item.title}</span>

                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item._id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.author}</p>
                            <p>{item.genre}</p>
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}€</b></p>
                        </div>

                 </div>
            )
        })
        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      items: state.items
    }
  }
  const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (_id)=>{dispatch(addToCart(_id))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Shop)
