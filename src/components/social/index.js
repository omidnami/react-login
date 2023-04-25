import React from "react";
import { getData } from "./handler";

const Social = (props) => {
    
    const socialItems = getData().map((res,index) =><li key={index}><a href={res.link}><i className={res.icon}></i></a></li>)

    return (
        <ul className="social-list clearfix">{socialItems}</ul>
    )
}
export default Social;