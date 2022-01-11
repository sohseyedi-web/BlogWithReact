import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav className={`${classes.navbars} container`}>
            <div className={classes.logo}>SOHEILS</div>
            <div className={classes.links}>
                <Link to="/">Home</Link>
                <Link to="/send">Send Post</Link>
            </div>
        </nav>
    )
}

export default Navbar
