import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ( { onInputChange, onButtonSubmit }) => {
    return(
        <div className="container">
            <p>Put your image link here for magik.</p>
            <input className="linkInput" type='tex' onChange = {onInputChange}/>
            <button className="detect" onClick = {onButtonSubmit}>Detect</button>
        </div>
    )
}

export default ImageLinkForm;