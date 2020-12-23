import React from 'react';
import './SignIn.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const SignIn = ({onRouteChange}) => {
    return(
        <form className= "signin-container" noValidate autoComplete="off">
            <h2 className="signin-title">Sign In</h2>
            <div >
                <TextField className="inpt-username" id="outlined-basic" label="Username" size='small' variant="outlined" />
            </div><br/>
            
            <div>
                <TextField className="inpt-username" id="outlined-basic" label="Password" type="password" size='small' variant="outlined" />
            </div><br/>
            
            <div className="btn-signin">
                <Button onClick={()=>onRouteChange('home')} style={{background: 'rgb(70, 185, 105)'}} variant="contained" fullWidth='true' color="primary">Sign In</Button>
            </div>
            <div className="btn-signin-register">
                <label onClick={()=>onRouteChange('register')} style={{cursor:'pointer'}} >Register</label>
            </div>
        </form>
    )
}

export default SignIn;