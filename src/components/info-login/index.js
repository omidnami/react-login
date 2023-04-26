import React from "react";
import Social from "../social";

const googleLogo = "/images/google-logo.png";
const githubLogo = "/images/github-logo.png";
const LoginInfo  = function (props) {
    
    return (
        <div className="col-lg-5 col-md-12 col-sm-12 px-0">
                    <div className="login_left">
                        <a href="/" className="logo_text">
                            <span>ON</span>  
                            
                        </a>
                        <h4 className="text-white">{props.title}</h4>
                        <p>{props.text}</p>
                        <button className="btn-outline mb-2 login_external">Google
                        <img src={googleLogo} width="20" height="20" />
                        </button>
                        <button className="btn-outline mb-2 login_external">github
                        <img src={githubLogo} width="20" height="20" />
                        </button>
                        <span className="text-center text-white">OR</span>
                        <button className="btn-outline mb-2"
                             onClick={props.onChangeSignUp}>{props.btn.title}</button>
                        <Social socials={props.socials} />
                    </div>
                </div>
    )
}
export default LoginInfo;