
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
      <div class="containerproduct">

               <div  class="cardmargin">
               <div class= "row">
               <a href="javascript:history.back()" class="back"> Go Back </a>
               <h1 class="titleproduct">{product.title}</h1>
                <div class="col">

                 <img class="shadow" src={`http://localhost:3000/Images/${product.img}`} style={{ width: 'auto', height: 'auto'}}/>
                   </div>
                       <div class="col" class="body" >
                     <Card.Body style={{ height: '100%'}}>
                     <Card.Title ><h2 class='cardtitle'>{product.price}€</h2></Card.Title>
                     <Card.Text>
                    {product.desc}<br/>{product.author}
                     </Card.Text>
                     <hr/>

                     <audio controls>
                       <source src="http://localhost:3000/Audio/Como_Aquellos_Años.wav" type="audio/ogg"/>
                       <source src="horse.mp3" type="audio/mpeg"/>
                       Your browser does not support the audio tag.
                     </audio>
                     <div class="enlinea">


                      <Button variant="primary" onClick={()=>{this.handleClick(product._id)}}>Add</Button>
                      </div>
                     </Card.Body>
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
