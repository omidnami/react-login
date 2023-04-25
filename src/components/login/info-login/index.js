import React from "react";
import Social from "../../social";

const LoginInfo  = function (props) {
    
    return (
        <div className="col-lg-5 col-md-12 col-sm-12 px-0">
                    <div className="login_left">
                        <a href="/" className="logo_text">
                            <span>ON</span>  
                            
                        </a>
                        <h4 className="text-white">{props.title}</h4>
                        <p>{props.text}</p>
                        <a href='' className="btn-outline mb-2">{props.btn.title}</a>
                        <a href='' className="btn-outline mb-2">{props.btn.title}</a>
                        <span className="text-center text-white">OR</span>
                        <button className="btn-outline mb-2"
                             onClick={props.onChangeSignUp}>{props.btn.title}</button>
                        <Social socials={props.socials} />
                    </div>
                </div>
    )
}
export default LoginInfo;