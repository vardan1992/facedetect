import React, { Component } from 'react';
import './App.css';

import Clarifai from 'clarifai';

import Particles from 'react-particles-js';

import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import InputImageForm from './InputImageForm/InputImageForm';
import Rank from './Rank/Rank';

import FaceDetect from './FaceDetect/FaceDetect';

import 'tachyons';



const app = new Clarifai.App({
  apiKey: 'e7a6c6fe8f6a40118af8b8f33eb6f95f'
 });

const particlesOption = {
  particles: {
    
  number:{
    value:50,
    density: {
      enable:true,
      value_area:800
    }
  },
  move: {
    speed:10
  }
  }
};

class App extends Component {
   constructor(props){
      super(props);
      this.state = {
        input:'',
        box: {
        }
      }
   }

   calculateDimesion = (boundingBox) => {
     const inputImage = document.getElementById('input-image');

  
      const width = Number(inputImage.width);
      const height = Number(inputImage.height);
  console.log("hi");
      const topRow = boundingBox.top_row * height;
      const bottomRow = height - (boundingBox.bottom_row * height);

      const leftCol = boundingBox.left_col * width;

      const rightCol = width - (boundingBox.right_col * width);

      console.log(topRow)

      this.setState((prevState) => {
        return {
          box: {
            topRow,
            bottomRow,
            leftCol,
            rightCol
          }
        }
      })
   }

   onSubmitURL = (e) => {
      e.preventDefault();
      const imageurl = e.target.url.value;
       this.setState({input:imageurl });
        
          app.models.predict(Clarifai.FACE_DETECT_MODEL, imageurl).then(
          (response) => {
            const boundingBox = response.outputs[0].data.regions[0].region_info.bounding_box;
            
            this.calculateDimesion(boundingBox);
          },
          function(err) {
            // there was an error
          }
);
   }
  render() {
    return (
      <div className="App">
      
      <Particles params={particlesOption} className="particles" />
       <Navigation />
       <Logo />
       <Rank />
       <InputImageForm onSubmitURL= {this.onSubmitURL} />
       <FaceDetect url ={this.state.input} box={this.state.box}/>
      </div>
    );
  }
}

export default App;
