import React from 'react'
import classes from './Vision.module.css'
import graphic from '../../assets/vision.png'

function Vision() {
  return (
    <div className={classes.vision}>
        <div className={classes.mesh}></div>
        {/* heading */}
        <div className={classes.heading}>
          <p>Vision<br/><span>& Mission</span></p>
        </div>

        {/* description */}
        <div className={classes.description}>
          <p>Our mission is to cultivate a <span>diverse community</span> of AI enthusiasts at Parul University, fostering innovation through education, collaborative projects, and ethical practices, while developing cutting-edge AI solutions that address real-world challenges 
          and expand our influence through impactful outreach and continuous growth.</p>
        </div>

        <div className={classes.blobcontainer}>
            <div className={classes.blob1}></div>
            <div className={classes.blob2}></div>
        </div>

        <div className={classes.vis_img}>
          <img src={graphic} alt="" />
        </div>
        

    </div>
  )
}

export default Vision