import React from 'react'
import classes from './Aim.module.css';
import rect1 from '../../assets/Rectangle1.png'
import rect2 from '../../assets/Rectangle3.png'
import star1 from '../../assets/Star2.png'
import star2 from '../../assets/Star1.png'
import bulb1 from '../../assets/Group2.png'
import bulb2 from '../../assets/Group3.png'
import planet1 from '../../assets/Group7.png'
import planet2 from '../../assets/Ellipse13.png'
import planet3 from '../../assets/Ellipse14.png'
import planet4 from '../../assets/Group8.png'
import neuron1 from '../../assets/Group4.png'
import neuron2 from '../../assets/Group5.png'
import cube1 from '../../assets/Rectangle7.png'
import cube2 from '../../assets/Rectangle8.png'


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
              <div className={classes.cargimg}>
                <img className={classes.rect1} src={rect1} alt="rect1" />
                <img className={classes.rect2} src={rect2} alt="rect2" />
              </div>
              <p className={classes.c1}>Gain technical literacy in <br/>core AI concepts and tools</p>
            </div>
          </div>
          <div className={classes.cardbg}>
            <div className={classes.card}>
              <div className={classes.mesh}></div>
              <div className={classes.cargimg}>
                <img className={classes.star1} src={star1} alt="star1" />
                <img className={classes.star2} src={star2} alt="star2" />
                <img className={classes.bulb1} src={bulb1} alt="bulb1" />
                <img className={classes.bulb2} src={bulb2} alt="bulb1" />
              </div>
              <p className={classes.c2}>Apply AI skillsets to create <br/>novel solutions in their fields</p>
            </div>
          </div>
          <div className={classes.cardbg}>
            <div className={classes.card}>
              <div className={classes.mesh}></div>
              <div className={classes.cargimg}>
                <img className={classes.planet1} src={planet1} alt="planet1" />
                <img className={classes.planet2} src={planet2} alt="planet2" />
                <img className={classes.planet3} src={planet3} alt="planet3" />
                <img className={classes.planet4} src={planet4} alt="planet4" />
              </div>
              <p className={classes.c3}>Analyse AI's ethical implications and <br/>societal effects</p>
            </div>
          </div>
          <div className={classes.cardbg}>
            <div className={classes.card}>
              <div className={classes.mesh}></div>
              <div className={classes.cargimg}>
                <img className={classes.neuron1} src={neuron1} alt="neuron1" />
                <img className={classes.neuron2} src={neuron2} alt="neuron2" />
              </div>
              <p className={classes.c4}>Engage with renowned AI experts <br/>and industry professionals.</p>
            </div>
          </div>
          <div className={classes.cardbg}>
            <div className={classes.card}>
              <div className={classes.mesh}></div>
              <div className={classes.cargimg}>
                <img className={classes.cube1} src={cube1} alt="cube1" />
                <img className={classes.cube2} src={cube2} alt="cube2" />
              </div>
              <p className={classes.c5}>Develop interdisciplinary collaboration <br/>and communication abilities.</p>
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