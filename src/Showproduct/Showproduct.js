
import { connect } from 'react-redux';
import './Showproduct.css'
import find from 'lodash/find';
import { addToCart } from '../actions/cartActions'
import { Link } from 'react-router-dom';
import initState from '../Data/Data.js'
import React, { useEffect, useState, Component } from 'react'
import {Card, Button} from 'react-bootstrap';
class Showproduct extends Component {
  constructor(props) {
      super(props);
      this.state = {
         playing: false,
       };
}

  handleClick = (_id) => {
          this.props.addToCart(_id);
        }
        handlePlay = () => {
          this.setState({ playing: !this.state.playing });

        };

 render(){

   const product = initState.items.find(({ _id }) => _id === this.props.match.params.id)
   console.log(product.audio)

    return (
        <div class="super">
        <div  class="cardmargin">
          <div class="container-fluid">
            <div class="row">
              <div class="col">
              <div class="col-sm-2">
               <a href="javascript:history.back()" class="back"> Go Back </a>
               </div>
                 <h1 class="titleproduct">{product.title}</h1>
                 <hr/>

              </div>

            </div>
            <div class="row">
              <div class="col-xs-6">
              <img  class="img-fluid" class="shadow" alt="Responsive image" src={`http://localhost:3000/Images/${product.img}`} />
              </div>
              <div class="col-xs-6">
              <div class="padding">
              <h2 class='cardtitle'>{product.price}€</h2>
              <p>{product.desc}</p><br/><p>{product.author}</p>
              {product.audio.map(item=>{
                  return(<div class="audio"><audio controls>
                    <source src={`http://localhost:3000/Audio/${item.song}`} type="audio/ogg"/>

                  </audio></div>)})}
              <br/>
              <Button variant="primary" onClick={()=>{this.handleClick(product._id)}}>Add</Button>
              </div>
              </div>
            </div>
          </div>
          </div>

        </div>







    );
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


  export default connect(mapStateToProps,mapDispatchToProps)(Showproduct)
