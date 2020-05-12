
import { connect } from 'react-redux';

import find from 'lodash/find';
import { addToCart } from '../actions/cartActions'
import { Link } from 'react-router-dom';
import initState from '../Data/Data.js'
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';
import { WaveformContianer, Wave, PlayButton } from './elements-waveform.js';
import React, { useEffect, useState, Component } from 'react'

class Showproduct extends Component {

  state = {
     playing: false,
   };

   componentDidMount() {
     var ws = [];
     const product = initState.items.find(({ _id }) => _id === this.props.match.params.id)
     const track = document.querySelector('#track');

     this.waveform = WaveSurfer.create({
       barWidth: 3,
       cursorWidth: 1,
       container: '#waveform',
       backend: 'WebAudio',
       height: 80,
       progressColor: '#2D5BFF',
       responsive: true,
       waveColor: '#EFEFEF',
       cursorColor: 'transparent',
     });


     this.waveform.load(product.audio.map(item => { return(`http://localhost:3000/Audio/${item.audio}.wav`)}));
   };


  handleClick = (_id) => {
          this.props.addToCart(_id);
        }


        handlePlay = () => {
          this.setState({ playing: !this.state.playing });
           this.waveform.playPause();
 };


 render(){
   const url = 'http://localhost:3000/Audio/Como Aquellos Años.wav'
   const product = initState.items.find(({ _id }) => _id === this.props.match.params.id)

    return (
      <div>
    <div className="card" key={product._id}>
              <div className="card-image">
                  <img src={`http://localhost:3000/Images/${product.img}`}/>
                  <span className="card-title">{product.title}</span>
                  <span className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(product._id)}}><i className="material-icons">add</i></span>
            </div>
              <div className="card-content">
                          <p>{product.author}</p>
                          <p>{product.genre}</p>
                          <p>{product.desc}</p>
                          <p><b>Price: {product.price}€</b></p>

                          {product.audio.map(item=>{ return(<WaveformContianer>
                            <PlayButton onClick={()=>{this.handlePlay()}}>
                            {!this.state.playing ? 'Play' : 'Pause'}
                            </PlayButton>
                            <Wave id="waveform" />
                            <audio id="track" src={`http://localhost:3000/Audio/${item.audio}`}/>
                          </WaveformContianer>)})}
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
