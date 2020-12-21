import React from 'react';

import './FaceRecognition.css';



const FaceRecognition = ({ imageUrl, box }) => {

    const boxValue = {
        top: box.topRow, 
        right: box.rightCol, 
        bottom: box.bottomRow, 
        left: box.leftCol
    }
    return(
        <div className="image-container">

            <div className="image">
                <img id='inputImage' alt='' src={imageUrl} 
                width='500px' height='auto' style={{borderRadius: '5px'}}/>

                <div className="bounding-box" 
                style = {boxValue}>
                                
                </div>
            </div>
        </div>
    )
}

export default FaceRecognition;