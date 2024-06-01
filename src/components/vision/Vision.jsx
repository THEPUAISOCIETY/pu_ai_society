import React from 'react'
import classes from './Vision.module.css'

function Vision() {
  return (
    <div className={classes.vision}>
        <div className={classes.mesh}></div>

        {/* heading */}
        <div className={classes.heading}>
          <p>Vision  of this project</p>
        </div>

        {/* description */}
        <div className={classes.description}>
          <p>To cultivate a dynamic community at The PU AI Society where diversity fuels innovation, knowledge is shared freely, and every member is empowered to harness the transformative potential of Artificial Intelligence for the betterment of society. Through collaboration, education, and ethical practices, we envision a future where AI serves as a force for positive change across all disciplines and sectors, contributing to a more inclusive and sustainable world. We aspire to elevate The PU AI Society to becoming a beacon of innovation and excellence not only within Parul University but also recognized by governmental bodies for our impactful out-of-the-box initiatives, setting a precedent for pioneering work in the field of AI.</p>
        </div>

        <div className={classes.blobcontainer}>
            <div className={classes.blob1}></div>
            <div className={classes.blob2}></div>
        </div>

    </div>
  )
}

export default Vision