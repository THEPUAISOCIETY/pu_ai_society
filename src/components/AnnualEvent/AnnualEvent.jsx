import React from 'react'
import classes from './AnnualEvent.module.css';

const itemOne = [
  {title: 'Multi-day event with diverse, interdisciplinary student teams'},
  {title: 'Develop innovative AI applications or solutions.'},
  {title: 'Corporate/faculty mentors to guide teams.'},
]

const itemTwo = [
  {title: 'This diversity fosters creativity and encourages unique perspectives in problem-solving. '},
  {title: 'Prizes for most impactful AI hacks'},
  {title: 'Mandatory to have diversity within each group, ensuring representation from different academic disciplines.'},
]
function AnnualEvent() {
  return (
    <div>

        {/* heading */}
        <div className={classes.heading}>
          <p>Major Annual Event</p>
        </div>

        {/* card */}
        <div className={classes.card}>

            {/* title */}
            <div className={classes.title}>
              <p>PU AI Society Hackathon</p>
            </div>

            {/* elements */}
            <div className={classes.element}>
            {itemOne.map((item, index) => (
              <div key={index}>
              <p>{item.title}</p>
            </div>
            ))}
            </div>

            {/* elements */}
            <div  className={classes.element}>
            {itemTwo.map((item, index) => (
              <div key={index}>
              <p>{item.title}</p>
            </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default AnnualEvent