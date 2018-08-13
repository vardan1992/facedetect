import React from 'react';

import './InputImageForm.css';

const InputImageForm = ({onSubmitURL}) => (
    <div className="input-image-form">
        <p className="input-image-form__p">This will detect faces in your pictures. Give it a try.</p>
        <form className="input-image-form__form" onSubmit={onSubmitURL}>
            <input className="input-image-form__input" type="text" placeholder="Insert Image URL Here" name="url" />
            <button className="input-image-form__button">Detect</button>
        </form>
    </div>
);

export default InputImageForm;