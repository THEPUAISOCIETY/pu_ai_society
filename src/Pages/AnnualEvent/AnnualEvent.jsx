import React from 'react';
import classes from './AnnualEvent.module.css';
import { HEADING, ITEMONE, ITEMTWO, ITEMTHREE } from '../../lib/constant';

const cards = [ITEMONE, ITEMTWO, ITEMTHREE];

function AnnualEvent() {
  return (
    <div className={classes.eventsection}>
      <div className={classes.heading}>
        <p>Major Annual Events</p>
      </div>

      <div className={classes.cardGrid}>
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

              <div className={classes.elementGrid}>
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
    </div>
  );
}

export default AnnualEvent;
