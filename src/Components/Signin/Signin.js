import React from 'react';

import './Signin.css';

const Signin = ({handleRoute}) => (
    <div className="sign-in-container">
        <form className="sign-in" onSubmit= {(e) => {
                e.preventDefault();
                handleRoute('homepage',true)
        }}>
            <input className="sign-in__input" type="text" name="username" placeholder="Username" />
            <input className="sign-in__input" type="password" name="pass" placeholder="Password" />
            <button className="sign-in__button">Sign In </button>

        </form>
    </div>
)

export default Signin;