import React from 'react'
import classes from './AnnualEvent.module.css';
import icon1 from '../../assets/Date.png'
import icon2 from '../../assets/Ai.png'
import icon3 from '../../assets/Mentor.png'
import icon4 from '../../assets/Diversity.png'
import icon5 from '../../assets/Prize.png'
import icon6 from '../../assets/Divergroup.png'

const itemOne = [
  {imgname: icon1, title: 'Multi-day event with diverse, interdisciplinary student teams'},
  {imgname: icon2, title: 'Develop innovative AI applications or solutions.'},
  {imgname: icon3, title: 'Corporate/faculty mentors to guide teams.'},
  {imgname: icon4, title: 'This diversity fosters creativity and encourages unique perspectives in problem-solving. '},
  {imgname: icon5, title: 'Prizes for most impactful AI hacks'},
  {imgname: icon6, title: 'Mandatory to have diversity within each group, ensuring representation from different academic disciplines.'},
]

// const itemTwo = [
//   {title: 'This diversity fosters creativity and encourages unique perspectives in problem-solving. '},
//   {title: 'Prizes for most impactful AI hacks'},
//   {title: 'Mandatory to have diversity within each group, ensuring representation from different academic disciplines.'},
// ]
function AnnualEvent() {
  return (
    <div className={classes.eventsection}>
        <div className={classes.blobcontainer}>
            <div className={classes.blob}></div>
        </div>

        {/* heading */}
        <div className={classes.heading}>
          <p>Major Annual Event</p>
        </div>

        {/* card */}
        <div className={classes.cardbg}>
          <div className={classes.blobcontainer}>
              <div className={classes.blob_}></div>
          </div>
          <div className={classes.card}>
            <div className={classes.mesh}></div>

            {/* title */}
            <div className={classes.title}>
              <p>PU AI Society Hackathon</p>
            </div>

            {/* elements */}
            <div className={classes.element}>
              {itemOne.map((item, index) => (
                <div className={classes.box_cont} key={index}>
                  <div className={classes.boximg}>
                    <img className={classes.icon} src={item.imgname} alt="" />
                  </div>
                  <p className={classes.text_cont}>{item.title}</p>
                </div>
              ))}
            </div>

            {/* elements */}
            {/* <div  className={classes.element}>
            {itemTwo.map((item, index) => (
              <div key={index}>
              <p className={classes.text_cont}>{item.title}</p>
            </div>
            ))}
            </div> */}
          
          </div>
        </div>
    </div>
  )
}

export default AnnualEvent