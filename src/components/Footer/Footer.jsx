// import React from 'react'
// import classes from './Footer.module.css';
// import logo from '../../assets/logo.png'
// import Location from '../../assets/Location.png'
// import Contact from '../../assets/Contact.png'
// import Mail from '../../assets/Mail.png'
// import Facebook from '../../assets/Facebook.png'
// import Twitter from '../../assets/Twitter.png'
// import Instagram from '../../assets/Instagram.png'
// import Linkedin from '../../assets/Linkedin.png'
// import { NAVITEM } from '../../lib/constant'
// import { Link } from 'react-router-dom';

// function Footer() {
//   return (

//     // outer div -> can be mesh and the blob
//     <div className={classes.footersectionbg}>
//       <div className={classes.mesh}></div>
//       <div className={classes.blobcontainer}>
//         <div className={classes.blob}></div>
//         <div className={classes.blob_}></div>
//       </div>
//       <div className={classes.footersection}>

//         {/* line */}
//         {/* <div className={classes.horizontal}></div> */}

//         {/* middle section */}
//         <div className={classes.middlesection}>

//           {/* logo - left side */}
//           <div className={classes.leftsection}>
//             <img src={logo} alt="logo" className={classes.logo} />
//           </div>

//           {/* right side */}
//           <div className={classes.rightsection}>

//             {/* Address */}
//             <div className={classes.location}>
//               <img src={Location} alt="Location" className={classes.locationimg} />
//               <p className={classes.textp}>Parul University</p>
//             </div>

//             {/* contact */}
//             <div className={classes.contact}>
//               <img src={Contact} alt="Contact" />
//               <p className={classes.textp}>+91 6353435262</p>
//             </div>

//             {/* mail */}
//             <div className={classes.mail}>
//               <img src={Mail} alt="Mail" />
//               <p className={classes.textp}>
//                 <a href="mailto:thepuaisocietyg@gmail.com">
//                   thepuaisocietyg@gmail.com
//                 </a>
//               </p>
//             </div>

//             {/* social links */}
//             <div className={classes.sociallink}>
//               <div>
//                 <p className={classes.textp}>Social Link:</p>
//               </div>
//               <div className={classes.social}>
//                 <img src={Twitter} alt="Twitter" />
//                 <img src={Linkedin} alt="Linkedin" />
//                 <img src={Instagram} alt="Instagram" />
//                 <img src={Facebook} alt="Facebook" />
//               </div>
//             </div>

//           </div>
//         </div>


//         {/* lower section */}
//         <div className={classes.horizontalbottom}></div>
//         <div className={classes.pagelink}>

//           <div className={classes.navitem}>
//             {NAVITEM.map((item, key) => (
//               <Link to={item.link} key={key} >
//                 {item.title}
//               </Link>
//             ))}
//           </div>
//           <div className={classes.copyright}>
//             <p className={classes.textp}>Copyright 2024 PU AI Society</p>
//           </div>
//         </div>


//         {/* design creadit */}
//         <div className={classes.credit}>
//           <a href="https://ritikavarma.com/" target='_blank'>
//             <h2>Designed by Ritika Varma</h2>
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer




import React from 'react';
import classes from './Footer.module.css';
import logo from '../../assets/logo.png';
import Location from '../../assets/Location.png';
import Contact from '../../assets/Contact.png';
import Mail from '../../assets/Mail.png';
import Facebook from '../../assets/Facebook.png';
import Twitter from '../../assets/Twitter.png';
import Instagram from '../../assets/Instagram.png';
import Linkedin from '../../assets/Linkedin.png';
import { NAVITEM } from '../../lib/constant';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.topSection}>
          <div className={classes.logoContainer}>
            <img src={logo} alt="PU AI Society Logo" className={classes.logo} />
          </div>
          <div className={classes.infoContainer}>
            <div className={classes.infoItem}>
              <img src={Location} alt="Location" />
              <p>Parul University</p>
            </div>
            <div className={classes.infoItem}>
              <img src={Contact} alt="Contact" />
              <p>+91 6353435262</p>
            </div>
            <div className={classes.infoItem}>
              <img src={Mail} alt="Mail" />
              <p>
                <a href="mailto:thepuaisocietyg@gmail.com">thepuaisocietyg@gmail.com</a>
              </p>
            </div>
          </div>
          <div className={classes.socialContainer}>
            <p>Follow Us</p>
            <div className={classes.socialIcons}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="Linkedin" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.bottomSection}>
          <div className={classes.navLinks}>
            {NAVITEM.map((item, key) => (
              <Link to={item.link} key={key}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className={classes.credit}>
            <p>© 2024 PU AI Society</p>
            <a href="https://ritikavarma.com/" target="_blank" rel="noopener noreferrer">
              Designed by Ritika Varma
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
