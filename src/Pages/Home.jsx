import React, {useContext} from 'react'
import TopMenu from './TopMenu'
import LandingPage from './LandingPage'
import LandingPageBottom from './LandingPageBottom'
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import SignUp from '../components/SignUp'
import { Context } from '../Context/Context';
import { short } from '../lib/';
import { translation } from '../../public/translation'




const Home = () => {
  const {sign, setSign, changeLanguage, selectedLanguage} = useContext(Context);


  return (
   
    <div className='flex flex-col justify-center items-center w-screen  bg-gradient-to-b from-[#0a1523] to-[#111d44bf] relative'>
        <div className='w-full h-[38px] fixed top-0' style={{background: `url(/images/paisagem.png)`}}></div>
        <div className=' w-full h-[50px] border-0 backdrop-blur-[10px] shadow-lg mx-auto p-2 flex items-center justify-between text-[rgb(255,255,255)] fixed top-0   z-[100]'>
            <div className='flex justify-center items-center text-[white]'>
                <img className='w-[45px] h-[45px]' src='/images/Vector1.png'/>
                <div className='flex justify-center items-baseline'>
                    <span className='text-[30px] ml-[10px] poetsen-one-regular'>Kept</span>
                    <span className='text-[20px] ubuntu-sans-mono'>Wallet</span>
                </div>
              
            </div>

            <div className='flex justify-between items-center w-[300px]'>
                <div>
                    <button onClick={() => {setSign(!sign)}} className='ml-[20px] w-[160px] border-[1px] text-[14px] rounded-[4px] font-mono border-[blue] bg-[#268adc61] text-[#fcfcfc] hover:bg-[#268adc98]'>{selectedLanguage === 'En' ? translation[0].en[0].content : translation[1].pt[0].content}</button>
                </div>
               <select onChange={changeLanguage} value={selectedLanguage} className='w-[80px] h-[22px] mr-[20px] rounded-[4px] border-[1px] border-[#D2B569] text-[#D2B569] bg-[#1e1b1bb1] text-[12px]' name="language" id="language">
                <option value="En">English</option>
                <option value="Pt">Português</option>
               </select>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center w-[83%] h-[90%] overflow-y-scroll overflow-hidden rounded-[15px] border-[0.1px] border-[#2685f972] mt-[85px] mb-[55px]'>
                <div>
                    <TopMenu />
                </div>
                    <div className='flex flex-col justify-center items-center w-full h-full  mt-[-152px] bg-[white]'>
                            <div className='flex justify-center items-center'>
                                <LandingPage />
                            </div>
                    

                        <div className=' w-[90%] h-[240px] z-50'>
                            <div className=' w-full h-[100%] z-40'>
                                <div className='w-full h-[100%] relative' style={{backgroundImage: `url(/images/paisagem.png)`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                                    {/* <img className='absolute top-0 w-[100%] h-[100%]' src='/images/paisagem.png'/> */}
                                    <img className='absolute top-0 w-[100%] h-[100%]' src='/images/Rectangle-bottom-2.png'/>
                                </div>
                            </div>
                        </div> 

                            <div className='flex justify-center items-center'>
                                <LandingPageBottom />
                            </div>

                            <div className='flex justify-between items-center w-[90%] h-[45px] mt-[20px] mb-[20px] bg-[#D2B569] pl-[15px] pr-[15px] rounded-[5px]'>
                                                         
                                    <p>KeptWallet</p>
                                    <p>Copyright 2024</p>
                            </div>
                    </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 w-full mb-[30px] md:mr-[20px]'>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <img className='w-[170px] h-[150px]' src='/images/Vector1.png'/>
                    <span className='flex justify-center items-center text-[40px] font-bold text-[white]'>Kept <span className='font-thin'>Wallet</span></span>
                </div>
                    <div className='flex justify-center items-center gap-4'>
                        <a href="https://twitter.com/keptchain" className='flex justify-center items-center text-[#be9e46] w-[30px] h-[30px] bg-[#3b4867] rounded-full'>< FaTwitter /></a>
                        <a href="https://web.telegram.org/k/#@keptchain" className='flex justify-center items-center text-[#be9e46] w-[30px] h-[30px] bg-[#3b4867] rounded-full'>< FaTelegramPlane  /></a>
                    </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center w-full text-[#d2d3d47d] mt-[30px] md:pr-[90px]'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-[20px] font-bold text-[#D2B569]'>
                    {selectedLanguage === 'En' ? translation[0].en[12].content : translation[1].pt[12].content}
                    </p>
                        <a href="https://www.sushi.com/swap?chainId=8453&token0=NATIVE&token1=0x8a9430e92153c026092544444cBb38077e6688D1" target='_blank'>{selectedLanguage === 'En' ? translation[0].en[13].content : translation[1].pt[13].content}</a>
                        <a href="https://dexscreener.com/base/0x92ad1b25fc9d6dd17bb2220553d36a1db8a4cdcf" target='_blank'>{selectedLanguage === 'En' ? translation[0].en[14].content : translation[1].pt[14].content}</a>
                        <a href="https://keptwallet.org/whitepaper/kept_whitepaper.pdf" target='_blank'>{selectedLanguage === 'En' ? translation[0].en[15].content : translation[1].pt[15].content}</a>
                        <a href="https://basescan.org/token/tokenholderchart/0x8a9430e92153c026092544444cBb38077e6688D1" target='_blank'>
                        {selectedLanguage === 'En' ? translation[0].en[16].content : translation[1].pt[16].content} <br/>
                            <div className='w-[80px]'>{short('0x8a9430e92153c026092544444cBb38077e6688D1')}</div>
                            </a>
                        <a href="https://keptwallet.org/" target='_blank'>KeptChain</a>

                    </div>

                    <div className='flex flex-col justify-center items-center md:pr-[60px]'>
                    <p className='text-[20px] font-bold text-[#D2B569]'>
                    {selectedLanguage === 'En' ? translation[0].en[17].content : translation[1].pt[17].content}
                    </p>
                        <a href="https://twitter.com/keptchain" target='_blank'>Twitter</a>
                        <a href="https://web.telegram.org/k/#@keptchain" target='_blank'>Telegram</a>
                    </div>           
                    
             </div>
        </div>
        <SignUp />
    </div>
  )
}

export default Home







