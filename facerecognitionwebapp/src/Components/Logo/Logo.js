import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import logo from './logo.png';
const Logo = () => {
    return(
        <div>
            <Tilt className="Tilt" options={{ max : 30 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner"> 
                    <img alt = 'logo' src = {logo} style = {{width: '50%', padding: '50px'}}/> 
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;