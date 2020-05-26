
import { connect } from 'react-redux';
import './Showproduct.css'

import { addToCart } from '../actions/cartActions'

import initState from '../Data/Data.js'
import React, { Component } from 'react'
import { Button} from 'react-bootstrap';
class Showproduct extends Component {
  constructor(props) {
      super(props);
      this.state = {
         loading: true,
       };
  this.spinnerLoading = this.spinnerLoading.bind(this);
}

  handleClick = (_id) => {
          this.props.addToCart(_id);
        }
        handlePlay = () => {
          this.setState({ playing: !this.state.playing });

        };
        spinnerLoading=()=>{
          const product = initState.items.find(({ _id }) => _id === this.props.match.params.id)
          switch (product) {
            case undefined:
            return(<div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>)
          break;
            case !undefined:
              return(<div  class="cardmargin">
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
                    <img  class="img-fluid" class="shadow" alt="Product pic" src={`https://zylen.herokuapp.com/Images/${product.img}`} />
                    </div>
                    <div class="col-xs-6">
                    <div class="padding">
                    <h2 class='cardtitle'>{product.price}€</h2>
                    <p>{product.desc}</p><br/><p>{product.author}</p>
                    {product.audio.map(item=>{
                        return(<div class="audio"><audio controls>
                          <source src={`https://zylen.herokuapp.com/Audio/${item.song}`} type="audio/ogg"/>

                        </audio></div>)})}
                    <br/>
                    <Button variant="primary" onClick={()=>{this.handleClick(product._id)}}>Add</Button>
                    </div>
                    </div>
                  </div>
                </div>
                </div>)
              break;
            default:
              return(<p></p>)
          }

        }

 render(){
const product = initState.items.find(({ _id }) => _id === this.props.match.params.id)

console.log(this.state.loading)



    return (
        <div class="super">
{this.spinnerLoading()}

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
