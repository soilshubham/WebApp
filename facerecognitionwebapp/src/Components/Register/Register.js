import React from 'react';
import './Register.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Register = ({onRouteChange}) => {
    return(
        <form className= "register-container" noValidate autoComplete="off">
            <h2 className="register-title">Register</h2>
            <div >
                <TextField className="inpt-username" id="standard-basic" label="Full Name" size='small'/>
            </div><br/>
            
            <div >
                <TextField className="inpt-username" id="standard-basic" label="Username" size='small' />
            </div><br/>
            
            <div>
                <TextField className="inpt-username" id="standard-basic" label="Password" type="password" size='small' />
            </div><br/>
            
            <div className="btn-register">
                <Button onClick={()=>onRouteChange('home')} style={{background: 'rgb(70, 185, 105)'}} variant="contained" fullWidth='true' color="primary">Register</Button>
            </div>
            <div className="btn-register-signin">
                <label onClick={()=>onRouteChange('home')} style={{cursor:'pointer'}} >Sign In</label>
            </div>
        </form>
    )
}

export default Register;