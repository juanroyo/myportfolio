import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import './Footer.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

export default class Footer extends Component {

render(){
  return(
    <div class="stylefooter">
      <div class="box">
         <div class="footer-wrapper">
         <a href="https://www.zylenstudio.com/" id="CONTACT">Contact</a>
         {/*<div class="img-qualities">
         <a href="www.youtube.com" target="_blank"> <img src="./Imagenes/soundcloud-logo3.png" alt=""/></a>
         <a href="www.youtube.com" target="_blank"> <img src="./Imagenes/instagram-logo.png" alt=""/></a>
         <a href="www.youtube.com" target="_blank"> <img src="./Imagenes/facebook-logo2.png" alt=""/></a>
         </div>
         <p>juan@zylenstudio.com</p>
         </div>*/}

         <div class="Copyright"><h6>© Copyright ZylenStudio 2019. All Rights Reserved.</h6></div>
      </div>
  <p>This is some text within a card body.</p>
</div>
</div>
    );
  }
}
