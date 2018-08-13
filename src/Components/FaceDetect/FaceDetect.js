import React from 'react';

import './FaceDetect.css';

const FaceDetect = ({url, box}) => (
    <div className="center mt5">
        <div className="absolute">
        <img src={url} alt="" width="600px" height="auto" 
        
        id="input-image" 
       
       />
       <div className="bounding-box"  style={{top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol}}></div>
        </div>

       
    </div>
);

export default FaceDetect;