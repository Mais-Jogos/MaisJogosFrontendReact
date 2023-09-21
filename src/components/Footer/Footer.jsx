import "./style.css";
import React from "react";


const Footer = () =>{

    const year = new Date().getFullYear();

    return(
        <div className="footer__main">
            <p>Copyright <i className="fa-regular fa-copyright"></i> {year} Cross-Plataform Dev.</p>
        </div>
    )
}

export default Footer;