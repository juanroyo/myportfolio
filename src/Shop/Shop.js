import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom';
import { useParams} from "react-router";
import { addToCart } from '../actions/cartActions'
import {Form} from 'react-bootstrap';
import cartReducer from '/Users/juanroyo/Documents/MyPortfolio/my-app/src/reducers/cartReducer.js'
import Tooltip from "@material-ui/core/Tooltip";
import React, { useState, useEffect } from 'react';


const Topico  = ( {props, match} ) => {
  //const topic = props.items.find(( _id ) => _id === props.match.params._id)
  console.log(match)
  console.log(props);
  return (
    <div><h1></h1></div>
  )
}

function Shop (  props, {match} )  {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
  setSearchTerm(event.target.value);

};
  useEffect(() => {
    const results = props.items.filter(item =>
      Object.keys(item).some(key => typeof item[key] === "string" && item[key].toLowerCase().includes(searchTerm))
    );
    setSearchResults(results);
  }, [searchTerm]);

const handleClick = (_id) => {
          props.addToCart(_id);
        }


        return(
            <div className="container">
              <Form inline>
              <Form.Control
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
              />
            </Form>

                <h3 className="center">Our items</h3>
                <div className="box">
                  {searchResults.map(item=>{
                      return(
                          <div className="card" key={item._id}>
                                  <div className="card-image">
                                       <Link to={`${props.match.url}/${item._id}`}><img src={`http://localhost:3000/Images/${item.img}`}/></Link>
                                      <span className="card-title">{item.title}</span>
                                      <span className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{handleClick(item._id)}}><i className="material-icons">add</i></span>
                                </div>
                                  <div className="card-content">
                                      <p>{item.author}</p>
                                      <p>{item.genre}</p>
                                      <p>{item.desc}</p>
                                      <p><b>Price: {item.price}€</b></p>
                                  </div>
                                    {console.log(props)}
                           </div>
                      )
                  })}
                </div>
                {/*<Route path={`${props.match.path}/:id`} component={Topico}/>*/}
                  <Route path={`${props.match.path}/:id`}>
                    <Topico props={props} match={props.match.params}/>
                  </Route>
            </div>
        )

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
