import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom';
import {Form} from 'react-bootstrap';
import { addToCart } from '../actions/cartActions'
import Showproduct from './Showproduct.js'
import React, { useState, useEffect } from 'react';


function Products (  props, {match} )  {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const items = props.items;
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
                                       <Link to={`/Showproduct/${item._id}`}><img src={`http://localhost:3000/Images/${item.img}`}/></Link>
                                      <span className="card-title">{item.title}</span>
                                      <span className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{handleClick(item._id)}}><i className="material-icons">add</i></span>
                                </div>
                                  <div className="card-content">
                                      <p>{item.author}</p>
                                      <p>{item.genre}</p>
                                      <p>{item.desc}</p>
                                      <p><b>Price: {item.price}€</b></p>
                                  </div>

                           </div>
                      )
                  })}
                </div>
                {/*<Route path={`${props.match.path}/:id`} component={Topico}/>*/}

                 <Route
                  path="/Showproduct/:id"
                  render={(props) => <Showproduct {...props} />}
                />
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


export default connect(mapStateToProps,mapDispatchToProps)(Products)
