import React from 'react';
import aboutimg from '../assets/aboutimg.jpeg'
import '../styles/About.css'
function About() {
    return (
        <div className='about'>
            <div className='aboutTop' 
            style={{ backgroundImage : `url(${aboutimg})`}}>

            </div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>At Sajith's HungerCaptain , we're tied in with presenting crisp food, regardless of whether it implies going the additional mile. When you stroll through our entryways,
                     we do what we can to make everybody feel comfortable in light of the fact that our family stretches out through your locale.

                     Sajith's HungerCaptain is an organization that is continually developing. From the principal eatery in 1969, we've kept on extending' 
                     vision to help other individuals end up effective entrepreneurs by owning an 'Sajith's HungerCaptain' establishment. We search for franchisees who are focused on quality, not compromising.

                     Today, we can be found in numerous nations and have our sights on extending much more. Be that as it may, regardless of where you discover us, 
                     quality will dependably be our formula.

                     We Believe in Quality. All around. Quality food can't be made without quality initiative. Find out about the general population driving 
                     The Sajith's HungerCaptain.</p>

</div>
            
 </div>
    );
}

export default About;