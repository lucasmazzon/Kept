import React, {useContext} from 'react'
import { translation } from '../../public/translation'
import { Context } from '../Context/Context';





const LandingPage = () => {
    const { selectedLanguage} = useContext(Context);


  return (
    <>
    <div className='flex justify-center items-center w-[78%] h-full bg-[#a9a9a925] relative'>
        <div className='w-full h-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-[95px]'>
                <div className='flex flex-col w-[100%] pl-[25px] pr-[20px]'>
                    <a className=' mb-[40px]'>
                    {selectedLanguage === 'En' ? translation[0].en[2].content : translation[1].pt[2].content}
                    </a>

                    <a className=' mb-[40px]'>
                    {selectedLanguage === 'En' ? translation[0].en[3].content : translation[1].pt[3].content}
                    </a>
                </div>

                <div className='flex flex-col mb-[30px]'>
                    <div className='flex flex-col md:flex-row text-center md:text-left  justify-center items-center md:items-start gap-2 md:gap-0 mb-[30px]'>
                        <div className='flex text-center ml-[15px]'>
                            <img className=' w-[60px] h-[60px]' src='/images/Group 201.png'/>
                        </div>
                            <div className='flex-1 ml-[15px] pr-[10px]'>
                            {selectedLanguage === 'En' ? translation[0].en[4].content : translation[1].pt[4].content}
                            </div>
                    </div>

                    <div className='flex flex-col mb-[30px]'>
                        <div className='flex flex-col md:flex-row text-center md:text-left justify-center items-center md:items-start gap-2'>
                            <div className='flex text-center ml-[15px]'>
                                <img className='w-[60px] h-[60px]' src='/images/Group 202.png'/>
                            </div>
                                <div className='flex-1 ml-[15px] pr-[10px]'>
                                {selectedLanguage === 'En' ? translation[0].en[5].content : translation[1].pt[5].content}
                                </div>
                        </div>
                    </div>

                    <div className='flex flex-col mb-[30px]'>
                        <div className='flex flex-col md:flex-row text-center md:text-left justify-center items-center md:items-start gap-2'>
                            <div className='flex  text-center ml-[15px]'>
                                <img className='w-[60px] h-[60px]' src='/images/Group 203.png'/>
                            </div>
                                <div className='flex-1 ml-[15px] pr-[10px]'>
                                {selectedLanguage === 'En' ? translation[0].en[6].content : translation[1].pt[6].content}
                                </div>
                        </div>
                    </div>

                </div>

            </div>

    </div>
                  

    </div>
      
    </>
  )
}

export default LandingPage


