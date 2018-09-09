import React from 'react';
import './navigation.css';
const Navigation = ({handleRoute, signedIn}) => (
    <div className="navigation">
        <h1 className="header">Face Detection </h1>
        {signedIn &&
        <button onClick={() => {
            handleRoute('signin',false)
        }} className="button" href="#">Sign Out </button>
       }
       {!signedIn &&
        <div className="button-container">
            <button onClick={() => {
                handleRoute('register',false)
            }} className="button" href="#">Register </button>
            <button onClick={() => {
                handleRoute('signin',false)
            }} className="button" href="#">Sign In </button>
        </div>
       }
    </div>
);

export default Navigation;