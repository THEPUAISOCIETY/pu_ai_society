import React from 'react'
import classes from './Navbar.module.css'
import logo from '../../assets/logo.png'
function Navbar() {
  return (
    <nav>
        {/*  logo */}
        <div className={classes.leftSide}>
            <img src={logo} alt="logo" className={classes.logo} />
            <p className={classes.title}>The PU AI Society</p>
        </div>

        {/* home, students */}
        <div className={classes.centerSide}>
            <p>Home</p>
            <p>Students</p>
        </div>

        {/* join us */}
        <div className={classes.rightSide}>
            <button>Join us</button>
        </div>
    </nav>
  )
}

export default Navbar