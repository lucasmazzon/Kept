import React from 'react'
import ModernInnovative from '../components/ModernInnovative'
import ExtremeSecurity from '../components/ExtremeSecurity'
import ExtraBooster from '../components/ExtraBooster'
import SmootherExperience from '../components/SmootherExperience'





const Icon = ({name, icon, shadow, text}) => {
    return(
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center w-[65px] h-[65px] mt-[40px] bg-[#8DBC4E] rounded-full'>
                    <div className='flex justify-center items-center w-[35px] h-[35px]'>{icon}</div>
                </div>
                            <div>{shadow}</div>
                        <div className='text-center text-[white] text-[17px]'>{name}</div>
                    <div className='max-w-[300px] md:w-[200px] text-[15px] text-center text-[white] mt-[20px]'>{text}</div>
            </div>
        </>
    )
}

const LandingPageBottom = () => {

    const baseIcons = [
        {name: 'SMOOTHER EXPERIENCE', icon: <img src='/images/logo/bottomIcon1.png'/>, shadow: <img className='w-[110px]' src='/images/logo/shadowBottom.png'/>, text:<SmootherExperience />},
        {name: 'EXTREME SECURITY', icon: <img src='/images/logo/bottomIcon2.png'/>, shadow: <img className='w-[110px]' src='/images/logo/shadowBottom.png'/>, text: <ExtremeSecurity />},
        {name: 'EXTRA BOOSTER', icon: <img className='w-[25px] h-[35px]' src='/images/logo/bottomIcon3.png'/>, shadow: <img className='w-[110px]' src='/images/logo/shadowBottom.png'/>, text: <ExtraBooster />},
        {name: 'MODERN & INNOVATIVE', icon: <img src='/images/logo/bottomIcon4.png'/>, shadow: <img className='w-[110px]' src='/images/logo/shadowBottom.png'/>, text: <ModernInnovative />},
    ];

  return (
    <div className='grid grid-col justify-center items-center  w-full pt-[50px]' >
            <div className='grid grid-col md:grid-cols-2 lg:grid-cols-4 justify-center gap-4 '>
                {baseIcons.map((i, index) => {
                    return(
                        <div key={index}><Icon {...i}/></div>
                    )
                })}
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center  gap-6 w-[450px] pb-[30px] mt-[50px]'>
                <div>
                    <img className=' w-[130px] h-[50px] pr-[-100px]' src='/images/logo/lockyPayBottom.png'/>    
                </div>
                        <div>
                            <img className=' w-[100px] h-[130px]' src='/images/logo/Vector.png'/>
                        </div>
                <div>
                    <img className=' w-[130px] h-[30px] ' src='/images/logo/lockyFiBottom.png'/>    
                </div>
            </div>
    </div>
  )
}

export default LandingPageBottom