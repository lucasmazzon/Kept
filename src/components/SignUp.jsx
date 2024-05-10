import React, { useContext } from 'react'
import { Context } from '../Context/Context'


const SignUp = () => {
    const {sign} = useContext(Context)
  return (
    <>
            <div className={`flex flex-col fixed top-[60px] right-[50px] bg-[#E3E3E3] overflow-hidden w-[250px] min-h-[200px] border-[1px] rounded-[10px]  border-[blue] z-50 transition duration-300 ${sign === true ? 'scale-1 ' : 'scale-0'} `}>
            <div className='flex justify-center items-center h-[40px] text-[white] text-[20px] bg-[#566CB2]'>Cadastro</div>
            <p className='ml-[10px]'>Receba em primeira mão o acesso para essa novidade!</p>
            <form>
                <input className='w-[200px] border-[1px] ml-[10px] mt-[7px] bg-[white]' type='text' placeholder='Nome Completo'/>
                <input className='w-[200px] border-[1px] ml-[10px] mt-[7px] bg-[white]' type='text' placeholder='E-mail'/>
                <input className='w-[200px] border-[1px] ml-[10px] mt-[7px] bg-[white]' type='text' placeholder='Telefone'/>
            </form>
                <div className='flex justify-center items-center mt-[20px] mb-[20px]'>
                    <button className=' w-[90%] h-[33px] rounded-[5px] hover:bg-[#3957b9] bg-[#566CB2]  text-[white]'>Entrar</button>
                </div>
        </div>

    </>
  )
}

export default SignUp