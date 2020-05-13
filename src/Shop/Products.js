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
            <h1>Shop</h1>


                <div className="box">
                  <div class="col-lg-9" class="centerme">
                  <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                      <img width={900} height={500}
                        className="d-block w-100"
                        src="http://localhost:3000/Images/Album4.png"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width={900} height={500}
                        className="d-block w-100"
                        src="http://localhost:3000/Images/Album4.png"
                        alt="Second slide"
                      />

                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width={900} height={500}
                        className="d-block w-100"
                        src="http://localhost:3000/Images/Album4.png"
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
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

                                      <div class="card h-100" >
                                      <div class="prodcard">
                                       <Link to={`/Showproduct/${item._id}`}><img src={`http://localhost:3000/Images/${item.img}`}/></Link>
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
