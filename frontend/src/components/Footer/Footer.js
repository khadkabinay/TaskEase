import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Footer.module.css'



const Footer = (props) => {
    return (
        <footer >
            <div className={classes.FooterBar}>
                <h5>Copyright@TaskEase2020</h5>
                
            </div>
        
        </footer>
    )
}

export default Footer;