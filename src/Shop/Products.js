import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom';
import {Form, Carousel, Button } from 'react-bootstrap';
import { addToCart } from '../actions/cartActions'
import Showproduct from '../Showproduct/Showproduct.js'
import React, { useState, useEffect } from 'react';
import './Products.css'


const Offers = {
  info:[],
}

function initApp() {
  console.log("initApp");
  //this.GetMovies();

  getOffersFromMongo();
}

initApp()



function getOffersFromMongo(){
  console.log("la funcion")
  fetch("https://ancient-oasis-38770.herokuapp.com/offers")
      .then(res => res.json())
      .then(res => {

        Offers.info = res;
      });
}

function Products (  props, {match} )  {
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

          const [index, setIndex] = useState(0);

          const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
          };

        return(
            <div class="container-lg" >

            <div class='row'>
            <h1>Shop</h1>
            </div>
            <div >
            <Carousel activeIndex={index} onSelect={handleSelect} class="centerme">
              {Offers.info.map(item=>{
                  return(<Carousel.Item>
                                  <img width={900} height={500}
                                    className="d-block w-100"
                                    src={`https://zylenstudio.herokuapp.com/Images/${item.img}`}
                                    alt="First slide"
                                  />
                                  <Carousel.Caption>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                  </Carousel.Caption>
                                </Carousel.Item>
)})}

            </Carousel>
            </div>
                <div className="box">

                <div class="title">
                <h3 className="center">Our items</h3>
                <div class="form">
                  <Form inline >
                  <Form.Control
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                  />
                </Form>
                </div>
                </div>

                  {searchResults.map(item=>{
                      return(



                                    <div class="col-lg-4 col-md-6 mb-4" key={item._id}>

                                      <div class="card bg-light h-100" >
                                      <div class="prodcard">
                                       <Link to={`/Showproduct/${item._id}`}><img class="img-fluid" alt="product pic" src={`https://zylenstudio.herokuapp.com/Images/${item.img}`} /></Link>
                                        <div class="card-body">
                                          <h4 class="card-title">
                                            {item.title}
                                          </h4>

                                          <p class="card-text">{item.desc}</p>
                                          <div class="prices">
                                            <p>{item.price}€</p>
                                          <Button variant="outline-primary" onClick={()=>{handleClick(item._id)}}>Add</Button>
                                        </div>
                                        </div>
                                        </div>
                                      </div>
                                    </div>


                      )
                  })}
                </div>
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
