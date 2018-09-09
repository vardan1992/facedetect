import React from 'react';

import './Register.css';

const Register = ({handleRoute}) => (
    <div className="register-container">
        <form className="register" onSubmit= {(e) => {
                e.preventDefault();
                handleRoute('homepage',true)
        }}>
            <input className="register__input" type="text" name="username" placeholder="Username" />
            <input className="register__input" type="text" name="email" placeholder="Email Id" />
            <input className="register__input" type="password" name="pass" placeholder="Password" />
            <button className="register__button">Register </button>

        </form>
    </div>
)

export default Register;