import React, { useEffect, useState } from 'react'
import classes from './AnnualEvent.module.css';
import { HEADING, ITEMONE, ITEMTHREE, ITEMTWO, } from '../../lib/constant';

// const itemTwo = [
//   {title: 'This diversity fosters creativity and encourages unique perspectives in problem-solving. '},
//   {title: 'Prizes for most impactful AI hacks'},
//   {title: 'Mandatory to have diversity within each group, ensuring representation from different academic disciplines.'},
// ]

const cards = [ITEMONE, ITEMTWO, ITEMTHREE];

function AnnualEvent() {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cards.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const getBlobClass = () => {
    switch (currentSlide) {
      case 0:
        return classes.blob_1;
      case 1:
        return classes.blob_2;
      case 2:
        return classes.blob_3;
      default:
        return classes.blob_1;
    }
  };

  return (
    <div className={classes.eventsection}>
        <div className={classes.blobcontainer}>
            <div className={classes.blob}></div>
        </div>

        {/* heading */}
        <div className={classes.heading}>
          <p>Major Annual Events</p>
        </div>
        

        {/* card container */}
        <div className={classes.cardContainer}>
          <div
            className={classes.cardWrapper}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {cards.map((card, cardIndex) => (
              <div className={classes.cardbg} key={cardIndex}>
                <div className={classes.blobcontainer}>
                  <div className={getBlobClass()}></div>
                </div>
                <div className={classes.card}>
                  <div className={classes.mesh}></div>

                  {/* title */}
                  <div className={classes.title}>
                    <p>{HEADING[cardIndex].heading}</p>
                  </div>

                  {/* elements */}
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

        {/* card */}
        {/* <div className={classes.cardbg}>
          <div className={classes.blobcontainer}>
              <div className={classes.blob_}></div>
          </div>
          <div className={classes.card}>
            <div className={classes.mesh}></div> */}

            {/* title */}
            {/* <div className={classes.title}>
              <p>PU AI Society Hackathon</p>
            </div> */}

            {/* elements */}
            {/* <div className={classes.element}>
            {cards[currentSlide].map((item, index) => (
              <div className={classes.box_cont} key={index}>
                <div className={classes.boximg}>
                  <img className={classes.icon} src={item.imgname} alt="" />
                </div>
                <p className={classes.text_cont}>{item.title}</p>
              </div>
            ))}
            </div>
     
          </div>
        </div> */}
        
          {/* dots navigation */}
          <div className={classes.dots}>
            {cards.map((_, index) => (
              <span
                key={index}
                className={`${classes.dot} ${currentSlide === index ? classes.active : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
    </div>
  )
}

export default AnnualEvent