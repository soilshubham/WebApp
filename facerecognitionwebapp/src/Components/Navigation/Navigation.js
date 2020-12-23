import React from 'react';
import './Navigation.css'

const Navigation = ( { currentRoute, onRouteChange } ) => {
    
    if(currentRoute==='home'){
        return(
            <nav className="sign-out">
                <div >
                    <p onClick={()=>onRouteChange('signin')} style={{cursor:'pointer'}}>Sign Out</p>
                </div>
            </nav>
        )
    }
    else{
        return(
            <nav className="sign-out">
                <div >
                    <p onClick={()=>onRouteChange('signin')} style={{cursor:'pointer'}}>  </p>
                </div>
            </nav>
        );
    }
}

export default Navigation;