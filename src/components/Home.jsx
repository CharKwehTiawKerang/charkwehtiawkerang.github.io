import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import monitor from '../assets/images/monitor.png'
import tube from '../assets/images/test_tubes.png'
import bulb from '../assets/images/bulb.png'
import paint from '../assets/images/paint.png'
import freeapibg from '../assets/images/freeapi-bg.png'

const Home = () => {

  useEffect(() => {
    document.title = "Red Blazer";
  }, []);

  return (
    <>
      <div className='home'>
        <div className='hero-section'>
          <div>
          <Fade bottom>
            <Typography className='hero-title'>Sit Back. Grab Popcorn. And Enjoy Our Works.</Typography> <br />
            <Typography className='hero-description'>TALK LESS | DO MORE</Typography>
            <Link to='/services' className='button'>
              <Typography>Learn More</Typography>
            </Link>
            </Fade>
          </div>
          <Fade bottom>
            <img src={monitor} className='hero-image' alt='Monitor Illustration Lukaszadam' />
          </Fade>
        </div>

        <div className='home-description'>
          <div>
            <Zoom>
              <img src={tube} className='work-image' alt='Tube Illustration Lukaszadam' />
              <Typography className='work-desc'>Develop websites, applications and databases</Typography>
            </Zoom>
          </div>
          <div className='border'></div>
          <div>
            <Zoom>
              <img src={paint} className='work-image' alt='Paint Illustration Lukaszadam' />
              <Typography className='work-desc'>Design illustrations, databases and websites</Typography>
            </Zoom>
          </div>
          <div className='border'></div>
          <div>
            <Zoom>
              <img src={bulb} className='work-image' alt='Bulb Illustration Lukaszadam' />
              <Typography className='work-desc'>Video editing, photography and animations</Typography>
            </Zoom>
          </div>
        </div>

        <div className='happening'>
          <div className='happening-fix'>
            <Fade bottom>
              <Typography className='happening-title'>Free API</Typography> <br />
              <Typography className='happening-desc'>Various application programming interface data for public use. Plus it’s free.</Typography>
              <br /> <br />
              <Link to='/services' className='button'>
                <Typography>Browse Now</Typography>
              </Link>
            </Fade>
          </div>
          <img src={freeapibg} className='freeapibg-image' alt='Database Key Illustration Lukaszadam' />
        </div>
      </div>
    </>
  )
}

export default Home