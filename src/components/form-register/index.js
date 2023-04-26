import React, { useState } from "react";
import { onRegisterClick, onSubmitRegisterForm } from "./handler"
const RegisterForm = () => {
        const [emailForm,setEmailForm] = useState(''); 
        const [passwordForm,setPasswordForm] = useState('');
        const [confirmPasswordForm,setConfirmPasswordForm] = useState('');
        const [rememberForm,setrememberForm] = useState(false);
        
       const emailIputHandler = (event) => {
                setEmailForm(event.target.value)
       }
       const passwordIputHandler = (event) => {
                setPasswordForm(event.target.value)
        }
        const confirmPasswordIputHandler = (event) => {
            setConfirmPasswordForm(event.target.value)
    }
        const checkHandler = (event)=>{
            setrememberForm(!rememberForm)
        }

    return (
        <div className="col-lg-7 col-sm-12">
        <div className="login-inner-form">
            <div className="details">
                <h3><span>Sign up</span>  Your Accuont</h3>
                <form onSubmit={onSubmitRegisterForm}>
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
                    <div className="form-group">
                        <input type="password" name="confirm_Password" className="input-text" placeholder="confirm-password"
                                onChange={confirmPasswordIputHandler} value={confirmPasswordForm}
                        />
                    </div>
                   
                    <div className="form-group">
                        <button onClick={onRegisterClick} type="submit" className="btn-md btn-theme btn-block">Sing up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default RegisterForm;