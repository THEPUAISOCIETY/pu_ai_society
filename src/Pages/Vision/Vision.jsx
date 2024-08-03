import React from 'react'
import classes from './Vision.module.css'
import graphic1 from '../../assets/vi.png'
import graphic2 from '../../assets/mi.png'


function Vision() {
  return (
    <div className={classes.vision}>
        <div className={classes.mesh}></div>

        <div className={classes.fbox1}>
          <div className={classes.vis_img}>
            <img src={graphic1} alt="" />
          </div>

          <div className={classes.content}>
            {/* heading */}
            <div className={classes.heading}>
              <p>Mission<br/><span>Of Our Society</span></p>
            </div>

            {/* description */}
            <div className={classes.description}>
              <p>Our mission is to cultivate a <span>diverse community</span> of AI enthusiasts at Parul University.
              <br /><br />Fostering innovation through education, collaborative projects, and ethical practices, while developing cutting-edge AI solutions that address real-world challenges 
              and expand our influence through impactful outreach and continuous growth.</p>
            </div>
          </div>
        </div>

        <div className={classes.fbox2}>
          <div className={classes.vis_img}>
            <img src={graphic2} alt="" />
          </div>

          <div className={classes.content}>
            {/* heading */}
            <div className={classes.heading}>
              <p>Vision<br/><span>Of Our Society</span></p>
            </div>

            {/* description */}
            <div className={classes.description}>
              <p>To cultivate a dynamic, diverse community at <span>The PU AI Society</span> that harnesses the transformative potential of Artificial Intelligence through collaboration, education, and ethical practices, becoming a recognized beacon of innovation that drives positive 
              societal change and sets new standards for excellence in AI across disciplines, both within Parul University and beyond..</p>
            </div>
          </div>
        </div>

        <div className={classes.blobcontainer}>
            <div className={classes.blob1}></div>
            <div className={classes.blob2}></div>
            <div className={classes.blob3}></div>
        </div>



    

    </div>
  )
}

export default Vision