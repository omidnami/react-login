import React, { useState } from "react";
import LoginForm from "../../components/form-login";
import LoginInfo from "../../components/info-login";
import Register from "../../components/form-register";
import ResetPassword from "../../components/form-reset-password";

function reduser(state, action){

}
function Login() {

const [signUp,setSignUp] = useState(false);
const [resetPassword,setResetPassword] = useState(false);
const [login,setLogin] = useState(true);  
     const changeSignUp = () =>  {
        setSignUp(!signUp);
        setResetPassword(false);
     }

   const changeResetPassword = () =>  {
      setResetPassword(!resetPassword);
   }
   
  let form = <LoginForm />
      if (signUp) {
        form = <Register />
      }else if(resetPassword){
        form = <ResetPassword />
      }else{
        form = <LoginForm onChangeResetPassword={changeResetPassword} />
      }




  return (
    <div className="login_wrapper">
        <div className="container">
            <div className="col-md-12 pad-0">
                <div className="row login-box-12">
                 {form}
                      <LoginInfo title={!signUp?'Fast login':'Fast register'} text="" btn={{title:signUp?'Sign in':'Sign up'}} 
                       onChangeSignUp={changeSignUp} />

                      
                  
                  

                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;