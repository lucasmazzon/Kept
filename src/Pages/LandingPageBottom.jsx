import React, {useContext} from 'react'
import { translation } from '../../public/translation'
import { Context } from '../Context/Context'



const LandingPageBottom = () => {
    const { selectedLanguage} = useContext(Context);

  return (
    <div className='flex flex-col w-[83%] pt-[20px] bg-[#a9a9a925]'>
    <div className='flex justify-center items-center text-[27px] ml-[20px] font-serif text-[#D2B569] text-center md:text-left'>
    {selectedLanguage === 'En' ? translation[0].en[7].content : translation[1].pt[7].content}
    </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex flex-col p-[15px]'>
                    <span className='text-[20px] text-center font-bold ml-[15px] md:text-left'>                    
                    {selectedLanguage === 'En' ? translation[0].en[8].content : translation[1].pt[8].content}
                    </span>
                        <p className='m-[15px] text-center md:text-left'>                    
                        {selectedLanguage === 'En' ? translation[0].en[9].content : translation[1].pt[9].content}
                        </p>
                </div>
                <div className='flex flex-col p-[15px]'>
                    <span className='text-[20px] text-center font-bold ml-[15px] md:text-left'>                    
                    {selectedLanguage === 'En' ? translation[0].en[10].content : translation[1].pt[10].content}
                    </span>
                    <p className='m-[15px] text-center md:text-left'>{selectedLanguage === 'En' ? translation[0].en[11].content : translation[1].pt[11].content}</p>
                </div>
        </div>
</div>
  )
}

export default LandingPageBottom