import React from 'react';
import classes from './AnnualEvent.module.css';
import { HEADING, ITEMONE, ITEMTWO, ITEMTHREE } from '../../lib/constant';

const cards = [ITEMONE, ITEMTWO, ITEMTHREE];

function AnnualEvent() {
  return (
    <div className={classes.eventsection}>
      <div className={classes.bgblob1}></div>

      <div className={classes.heading}>
        <p>Major Annual Events</p>
      </div>
      <div className={classes.cardContainer}>
        {cards.map((card, cardIndex) => (
          <div className={classes.cardbg} key={cardIndex}>
            <div className={classes.blobcontainer}>
              <div className={classes[`blob_${cardIndex + 1}`]}></div>
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
    </div>
  );
}

export default AnnualEvent;
