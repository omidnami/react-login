import React, { useState } from "react";
import { onLoginClick, onSubmitLoginForm, onCheckHandler } from "./handler";
const LoginForm = (props) => {
        const [emailForm,setEmailForm] = useState(''); 
        const [passwordForm,setPasswordForm] = useState('');
        const [rememberForm,setrememberForm] = useState(false);
        
       const emailIputHandler = (event) => {
                setEmailForm(event.target.value)
       }
       const passwordIputHandler = (event) => {
                setPasswordForm(event.target.value)
        }
        const checkHandler = (event)=>{
            setrememberForm(!rememberForm)
        }

    return (
        <div className="col-lg-7 col-sm-12">
        <div className="login-inner-form">
            <div className="details">
                <h3><span>Sign in</span>  Your Accuont</h3>
                <form onSubmit={onSubmitLoginForm}>
                    <div className="form-group">
                        <input type="email" name="email" className="input-text" placeholder="email"
                                onChange={emailIputHandler} value={emailForm}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password" name="Password" className="input-text" placeholder="password"
                                onChange={passwordIputHandler} value={passwordForm}
                        />
                    </div>
                    <div className="checkbox clearfix">
                        <div className="form-check checkbox-theme">
                            <label className="form-check-label">
                                Remember me
                                <input 
                                className="form-check-input" 
                                type="checkbox" 
                                checked={rememberForm} 
                                id="rememberMe"
                                />
                            </label>
                            
                        </div>
                        <a onClick={props.onChangeResetPassword} href="#">Lost Password</a>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn-md btn-theme btn-block" 
                        onClick={onLoginClick}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default LoginForm;