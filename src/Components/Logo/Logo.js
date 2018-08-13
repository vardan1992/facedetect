import React from 'react';
import './logo.css';
import Tilt from 'react-tilt'

import face from './face.png';

const Logo = () => (
    <div className="logo">
        <Tilt className="Tilt br2 shadow-2" options={{ max : 95,speed: 800 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner"> <img src={face} width="100%" alt="logo"/> </div>
        </Tilt>
    </div>
);

export default Logo;