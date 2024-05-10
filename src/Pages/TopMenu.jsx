import React, { useContext, useState } from 'react'
import { translation } from '../../public/translation'
import { Context } from '../Context/Context'



const TopMenu = () => {
    const {selectedLanguage} = useContext(Context)

  return (
    <> 
    <div className='flex flex-col '>
            <div className='flex justify-center items-center w-screen  '>
                <div className='w-[85%] h-[280px] overflow-hidden rounded-t-[10px] relative'>
                    <img className='absolute top-0 w-[100%] h-full z-10' src='/images/Rectangle-top-1.png'/>
                    <img className='absolute top-0 right-0 w-[600px] pr-[7px] h-full' src='/images/Rectangle-top-2.png'/>
                    <img className='absolute top-0 left-[35px] w-[43%] h-[90%] z-20 ' src='/images/Group 75.png'/>

                </div>
            </div>
         <div className='text-[white] w-[230px] z-50 mt-[-240px] ml-[15%] md:ml-[21%]'>
            <span>
                <img className=' w-[60px] h-[50px] z-30' src='/images/Group 210.png'/>
            </span>
                <p className='w-[220px] md:w-[230px] mt-[12px] pb-[30px] text-[15px]'>
                {selectedLanguage === 'En' ? translation[0].en[1].content : translation[1].pt[1].content}
                </p>
        </div>
                <span className='mt-[190px] z-50'>
                <img className=' w-[320px] h-[260px] ml-[9%] mt-[-217px] ' src='/images/iPhone 12 Pro.png'/>
                 </span>
    </div>
    </>
  )
}
    
export default TopMenu

// style={{background: `url(/images/Paisagem.png)`}} 