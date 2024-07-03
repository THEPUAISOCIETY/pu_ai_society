import React from 'react'
import classes from './Team.module.css';
import { itemFour } from '../../lib/constant';


export default function Teams() {
  return (
    <div>
        <div className={classes.teamsection}>
            <div className={classes.mesh}></div>
            {/* heading, sub heading */}
            <div className={classes.teams}>
                <p className={classes.heading}>Our Team</p>
                <p className={classes.subheading}>We are a group of passionate individuals working together to achieve our goals.<br/>Get to know the faces behind our success.</p>
            </div>
        

        <div className={classes.cardbg}>
          <div className={classes.card}>

            {/* elements */}
            <div className={classes.element}>
              {itemFour.map((item, index) => (
                <div className={classes.box_cont} key={index}>
                  <div className={classes.boximg}>
                    {/* <img className={classes.icon} src={item.imgname} alt="" /> */}
                  </div>
                  <p className={classes.text_cont}>{item.title}</p>
                  <p className={classes.role_cont}>{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>




    </div>
  )
}
