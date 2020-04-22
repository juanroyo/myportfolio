import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom';
import { addToCart } from '../actions/cartActions'
import {Form} from 'react-bootstrap'
import Tooltip from "@material-ui/core/Tooltip";
import {Howl, Howler} from 'howler';
import ReactHowler from 'react-howler'
class Shop extends Component {
  constructor() {
      super();
      this.state = {
        search:null,
        genre:null,
        title: "Add",
        playing: false
      };

      this.handleToggle = this.handleToggle.bind(this)
    }
  handleClick(_id){
        this.props.addToCart(_id);

        this.setState({title: "Added"})
        var title = this.state.title;

      }

      searchSpace=(event)=>{
   let keyword = event.target.value;
   this.setState({search:keyword})
 }
      searchGenre=(event)=>{
   let keyword = event.target.value;
   this.setState({genre:keyword})
 }

  handleToggle () {
     this.setState({
       playing: !this.state.playing
     })
   }


render(){


        /*let itemList = this.props.items.map(item=>{
            return(

                <div className="card" key={item._id}>

                  {console.log(item._id)}
                        <div className="card-image">
                            <img src={item.img}/>

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
        })*/
        return(
            <div className="container">
              <Form inline>
              <Form.Control
                placeholder="Search"
                value={this.state.filter}
                onChange={(e)=>this.searchSpace(e)}
              />
            </Form>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Example select</label>
              <select class="form-control" id="exampleFormControlSelect1" onChange={(e)=>this.searchGenre(e)}>
                <option>select an option</option>
                <option>House</option>
                <option>Disco</option>
                <option>Electronic</option>
                <option>Rock</option>
                <option>Techno</option>
              </select>
            </div>
                <h3 className="center">Our items</h3>
                <div className="box">
                  {this.props.items
                    .filter((item)=>{

                        if(this.state.search == null && this.state.genre == null) {
                            return item
                        } else if (Object.keys(item).some(key => typeof item[key] === "string" && item[key].toLowerCase().includes(this.state.search)) || Object.keys(item).some(key => typeof item[key] === "string" && item[key].toLowerCase().includes(this.state.genre))){
                             return item
                        }
                      })
                    .map(item=>{
                      return(
                          <div className="card" key={item._id}>
                                  <div className="card-image">
                                       <Link to={`shop/${item._id}`}><img src={`http://localhost:3000/Images/${item.img}`}/></Link>
                                      <span className="card-title">{item.title}</span>
                                      <Tooltip title={this.state.title} aria-label="add">
                                      <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item._id)}}><i className="material-icons">add</i></span>
                                      </Tooltip>
                                </div>
                                  <div className="card-content">
                                      <p>{item.author}</p>
                                      <p>{item.genre}</p>
                                        <ReactHowler
                                         src={['./Audio/Sequences.mp3']}
                                         playing={this.state.playing}
                                       />

                                     <button onClick={this.handleToggle}>
                                      {(this.state.playing) ? 'Pause' : 'Play'}
                                    </button>
                                      <p>{item.desc}</p>
                                      <p><b>Price: {item.price}€</b></p>
                                  </div>
                           </div>
                      )
                  })}
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
