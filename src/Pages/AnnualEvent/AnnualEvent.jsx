import React from 'react';
import classes from './AnnualEvent.module.css';
import { HEADING, ITEMONE, ITEMTWO, ITEMTHREE } from '../../lib/constant';

const cards = [
  { heading: HEADING[0].heading, items: ITEMONE },
  { heading: HEADING[1].heading, items: ITEMTWO },
  { heading: HEADING[2].heading, items: ITEMTHREE }
];

function AnnualEvent() {
  return (
    <div className={classes.eventsection}>
      {/* heading */}
      <div className={classes.heading}>
        <p>Major Annual Events</p>
      </div>
      
      {/* card container */}
      <div className={classes.cardContainer}>
        {cards.map((card, cardIndex) => (
          <div className={classes.cardbg} key={cardIndex}>
            <div className={classes.blobcontainer}>
              <div className={classes[`blob_${cardIndex + 1}`]}></div>
            </div>
            <div className={classes.card}>
              <div className={classes.mesh}></div>

              {/* title */}
              <div className={classes.title}>
                <p>{card.heading}</p>
              </div>

              {/* elements */}
              <div className={classes.element}>
                {card.items.map((item, index) => (
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
