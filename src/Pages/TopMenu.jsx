import React, { useState } from 'react'

import { images } from '../assets'

    const menuBtn = [
        {id: 1, name: 'Learn More'},
        {id: 2, name: 'Get Started'},
    ]

const TopMenu = () => {
    const [selected, setSelected] = useState(false)
    console.log(selected)

    // sm: '600px',
    // md: '728px',
    // lg: '984px',
    // xl: '1240px'

  return (
    <div className='flex flex-col  w-full '>     
        
        <div className='flex  w-[100%] h-[350px] relative' >
            <img className='w-full h-[350px] ' src={images.Logo}/>
            <div className='flex fixed top-0 w-[100%] h-[160px]'>
                <img className='w-[600px] md:w-[728px] lg:w-[990px] xl:w-[1240px] h-[160px] ' src='/images/logo/rectangle2.png'/>
            </div>
                
        </div>

            <div className='flex justify-center items-center mt-[-310px] z-30 relative md:ml-[100px]'>
                <div className='flex flex-col' >
                    <div className=' h-[100px] relative'>
                        <div>
                            <img className='w-[100px] h-[95px] mt-[-30px] ml-[25px] fixed z-50' src='/images/logo/Logo.png'/>
                        </div>
                            
                    </div>

                    <div className='w-[100%] h-[200px] text-[white]'>
                        <img className='absolute top-[53px] left-[-42px] w-[380px] mt-[-25px]' src='/images/logo/doblePhone.png'/>

                    </div>
                    
                </div>

                <div className=' flex justify-end items-center bg-[#0505054b] w-[600px] md:w-[728px] md:ml-[-99px] lg:w-[984px] xl:w-[1240px] backdrop-blur-[12px] h-[110px] fixed top-0'>
                                    <img className='w-[120px] h-[30px] mb-[10px] mr-[25px] ' src='/images/logo/Lockypay.png'/>
                            </div>
                
                    <div className='flex flex-col items-end  w-[100%] pr-[25px]'>    

                            <div className=' h-[200px] mt-[210px] '>
                                <img className='w-[150px] mt-[-150px]' src='/images/logo/NEW CRYPTO EXPERIENCE.png'/>
                                <img className='w-[150px] mt-[10px]' src='/images/logo/TextTopRight.png'/>
                            </div>

                            <div className='flex mt-[-208px] gap-2 '>
                                {menuBtn.map((b, index) => {
                                    return <button key={index} onClick={() => {setSelected(index)}} className={`text-[white] w-[90px] h-[28px] rounded-[30px] text-[14px] border-[1px] border-[white] ${selected === index && ' border-none text-[#201f1f] bg-[#B3F35F]'}`}>{b.name}</button>
                                    
                                    
                                })}
                            </div>
                    </div>
            </div>
          
       

    </div>
  )
}

export default TopMenu