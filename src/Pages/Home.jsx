import React from 'react'
import TopMenu from './TopMenu'
import LandingPageTop from './LandingPageTop'
import LandingPageBottom from './LandingPageBottom'



const Home = () => {
  return (
    <div className='flex flex-col bg-gradient-to-b from-[#afb1b3] to-[#5b5757]'>

            <div className=' z-50'>
                <TopMenu />
            </div>

                    <div>
                        <LandingPageTop />
                    </div>

            <div style={{
                        background: `url(/images/logo/keptLogo1.png)`,
                        backgroundPositionY: '10px',
                        backgroundPositionX: 'center',
                        backgroundSize: '500px',
                        backgroundRepeat: 'no-repeat'
                        }}>
                <LandingPageBottom />
            </div>
      </div>
  )
}

export default Home