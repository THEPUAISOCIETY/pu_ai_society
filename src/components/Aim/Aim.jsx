import React from 'react'
import classes from './Aim.module.css';

function Aim() {
  return (
    <>
    <div className={classes.aimsection}>
        {/* heading, sub heading */}
        <div className={classes.aim}>
          <p className={classes.heading}>We aim to fostering a diverse and inclusive community</p>
          <p className={classes.subheading}>Through hands-on learning, research, knowledge-sharing, and social impact initiatives, we empower students to:</p>
        </div>

        {/* cards */}
        <div className={classes.allcards}>
          <div className={classes.cardbg}>
            <div className={classes.card}>
              <div className={classes.mesh}></div>
              <p className={classes.c1}>Gain technical literacy in<br/>core AI concepts and tools</p>
            </div>
          </div>
          <div className={classes.cardbg}>
            <div className={classes.card}>
              <div className={classes.mesh}></div>
              <p className={classes.c2}>Apply AI skillsets to create<br/>novel solutions in their fields</p>
            </div>
          </div>
          <div className={classes.cardbg}>
            <div className={classes.card}>
              <div className={classes.mesh}></div>
              <p className={classes.c3}>Analyse AI's ethical implications and<br/>societal effects</p>
            </div>
          </div>
          <div className={classes.cardbg}>
            <div className={classes.card}>
              <div className={classes.mesh}></div>
              <p className={classes.c4}>Engage with renowned AI experts<br/>and industry professionals.</p>
            </div>
          </div>
          <div className={classes.cardbg}>
            <div className={classes.card}>
              <div className={classes.mesh}></div>
              <p className={classes.c5}>Develop interdisciplinary collaboration<br/>and communication abilities.</p>
            </div>
          </div>
          <div className={classes.blobcontainer}>
            <div className={classes.blob}></div>
          </div>
          
        </div>

        
    </div>
    </>
  )
}

export default Aim