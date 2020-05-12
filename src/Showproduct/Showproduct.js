
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
               <Card style={{ width: '60%', height: '500px', margintop: '100px' }}>
                 <Card.Img variant="top" src={`http://localhost:3000/Images/${product.img}`} style={{ width: '200px', height: '200px' }} />
                 <Card.Body>
                 <Card.Title>{product.title}</Card.Title>
                 <Card.Text>
                {product.desc}
                 </Card.Text>
                 <Card.Text>

                 </Card.Text>
                 <audio controls>
                   <source src="http://localhost:3000/Audio/Como_Aquellos_Años.wav" type="audio/ogg"/>
                   <source src="horse.mp3" type="audio/mpeg"/>
                   Your browser does not support the audio tag.
                 </audio>
                 <p><b>Price: {product.price}€</b></p>
                  <Button variant="primary" onClick={()=>{this.handleClick(product._id)}}>Add</Button>
                 </Card.Body>
           </Card>
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
