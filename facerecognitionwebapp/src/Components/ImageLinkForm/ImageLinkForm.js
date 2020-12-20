import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return(
        <div className="container">
            <p>Put your image link here for magik.</p>
            <input className="linkInput" type='tex' />
            <button className="detect">Detect</button>
        </div>
    )
}

export default ImageLinkForm;