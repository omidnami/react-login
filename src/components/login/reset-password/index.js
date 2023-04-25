import React, { useState } from "react";
import { onResetClick, onSubmitResetForm } from "./handler";

let message = false;
const ResetPassword = () => {
        const [emailForm,setEmailForm] = useState('');

       const emailIputHandler = (event) => {
                setEmailForm(event.target.value)
       }

    return (
        <div className="col-lg-7 col-sm-12">
        <div className="login-inner-form">
            <div className="details">
                <h3><span>Reset</span>  Your Accuont</h3>
                <form onSubmit={onSubmitResetForm}>
                    <p className="alert alert-success">Your new password sended to entry email</p>
                    <div className="form-group">
                        <input type="email" name="email" className="input-text" placeholder="email"
                                onChange={emailIputHandler} value={emailForm}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn-md btn-theme btn-block" 
                        onClick={onResetClick}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default ResetPassword;