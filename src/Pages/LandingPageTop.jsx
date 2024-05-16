import React from 'react'

const LandingPageTop = () => {
  return (
    <div className='flex flex-col items-center w-full mt-[-100px] pt-[140px] overflow-hidden relative'>
        <div className='absolute left-[50px]'>
               <img className='w-[210px] ml-[-10px] mt-[-20px] md:ml-[80px] ' src='/images/logo/shadow.png'/>
        </div>

        <div className='flex flex-col justify-center items-center  w-[90%] ' >

            <div className='flex flex-col-reverse justify-center items-center md:flex-row w-[100%] mt-[120px] '>
                <div className='flex flex-col w-full h-[100%]  '>
                    <span className='text-center md:text-right font-bold text-[25px] mt-[30px]'>ABOUT IT</span>
                    
                    <div className='flex justify-center  w-[100%] h-full mt-[10px]'>
                        <p className='text-center md:text-right md:pl-[20%] leading-6'>
                        <span className='text-[#84ff41] font-bold text-[20px]'>LockyPay</span> is the first decentralized digital bank mobile application that integrates the blockchain technology and empowers users to custody their own funds.
                        </p>
                    </div>
                </div>
                    <div className='flex justify-center items-center w-[350px]'>
                        <img className='w-[140px] h-[250%]' src='/images/logo/QRcode.png'/>
                    </div>
            </div>

            <div className='flex flex-col justify-center w-[100%]  mt-[80px] md:mt-[110px] '>
                <div className='flex flex-col-reverse justify-center items-center md:flex-row  w-[100%]'>
                        

                        <div className='flex flex-col w-full h-[100%] mt-[-20px] '>
                            <span className='text-center md:text-right font-bold text-[25px]'>REVOLUTIONARY</span>
                            
                            <div className='flex w-[100%] h-full mt-[10px]'>
                                <p className='text-center md:text-right md:pl-[30%]  leading-6'>
                                <span className='text-[#84ff41] font-bold text-[20px]'>LockyPay</span> is revolutionizing the way people transact in the digital age. It's a cutting-edge mobile application built on the foundation of <span className='text-[#84ff41] font-bold text-[20px]'>LockyFi</span>, a decentralized exchange platform. 
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-[350px]'>
                             <img className=' w-[full] h-[250px] mb-[50px]' src='/images/logo/phone3.png'/>  
                        </div>
                </div>
                
            </div>

            <div className='flex flex-col justify-center w-[100%]  mt-[100px] md:mt-[70px]'>
                <div className='flex flex-col justify-center items-center md:flex-row w-[100%]'>
                         <div className='flex justify-center items-center w-[350px]'>
                             <img className=' w-[full] h-[250px] mt-[-80px]' src='/images/logo/phone4.png'/>
                        </div>

                        <div className='flex flex-col w-full h-[100%] mt-[10px]  '>
                            <span className='text-center md:text-left text-[25px] font-bold mt-[20px]'>EFFICIENT</span>
                            
                            <div className='flex w-[100%] text-center md:text-left  mt-[10px] px-[5px] leading-6'>
                                <p>
                                With <span className='text-[#84ff41] font-bold text-[20px]'>LockyPay</span>, users can seamlessly pay for goods and services using cryptocurrencies. What sets <span className='text-[#84ff41] font-bold text-[20px]'>LockyPay</span> apart is its commitment to decentralization and security. Unlike traditional payment platforms, <span className='text-[#84ff41] font-bold text-[20px]'>LockyPay</span> doesn't hold any user funds. Instead, every transaction is executed directly with the blockchain, ensuring transparency and eliminating the need for intermediaries.
                                </p>
                            </div>
                        </div>
     
                </div>
                
            </div>

            <div className='flex flex-col justify-between w-[100%] mt-[110px] md:mt-[90px] '>
                <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
                    
                        <div className='flex flex-col w-full h-[100%] mt-[10px]  '>
                            <span className='text-center md:text-right font-bold text-[25px] mt-[20px]'>QUALITY</span>
                            
                            <div className='flex w-[100%] mt-[10px] md:pl-[20%]'>
                                <p className='text-center md:text-right leading-6'>
                                Users have full control over their assets at all times. Whether you're purchasing your morning coffee or booking a flight, <span className='text-[#84ff41] font-bold text-[20px]'>LockyPay</span> offers a fast, secure, and decentralized payment solution for the modern world.
                                </p>
                            </div>
                        </div>
            
                            <div className='flex justify-center items-start w-[350px]'>
                                 <img className=' w-[full] h-[250px] mt-[-80px]' src='/images/logo/phone5.png'/>
                            </div>
                </div>

                
            </div>

        </div>
    </div>
  )
}

export default LandingPageTop