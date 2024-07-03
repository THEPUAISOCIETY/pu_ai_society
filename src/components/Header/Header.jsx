import React from 'react'
import classes from './Header.module.css';

import brain from '../../assets/brain.png'

function Header() {
  return (
    <header>
        {/*  */}
        <div className={classes.header}>
            {/* shape */}
            <div className={classes.shape}>
              <p>Shape how this transformative technology impacts our world.</p>
            </div>

            {/* Image */}
            <div className={classes.brainImg}>
              <img src={brain} alt="brain" />
            </div>
        </div>

        {/* grid - position property */}
        <div></div>
    </header>
  )
}

export default Header