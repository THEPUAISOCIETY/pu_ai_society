import React from 'react';
import classes from './AnnualEvent.module.css';
import { HEADING, ITEMONE, ITEMTHREE, ITEMTWO } from '../../lib/constant';

const cards = [ITEMONE, ITEMTWO, ITEMTHREE];

function AnnualEvent() {
  return (
    <div className={classes.eventsection}>
      <div className={classes.gridBackground}>
        {/* Apply grid background styling */}
      </div>

      <div className={classes.heading}>
        <p>Major Annual Events</p>
      </div>

      <div className={classes.cardContainer}>
        {cards.map((card, cardIndex) => (
          <div className={classes.cardbg} key={cardIndex}>
            <div className={classes.blobcontainer}>
              <div className={classes.blob}></div>
            </div>
            <div className={classes.card}>
              <div className={classes.mesh}></div>

              <div className={classes.title}>
                <p>{HEADING[cardIndex].heading}</p>
              </div>

              <div className={classes.element}>
                {card.map((item, index) => (
                  <div className={classes.boxCont} key={index}>
                    <div className={classes.boximg}>
                      <img className={classes.icon} src={item.imgname} alt="" />
                    </div>
                    <p className={classes.textCont}>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={classes.dots}>
        {/* Navigation dots */}
      </div>
    </div>
  );
}

export default AnnualEvent;
