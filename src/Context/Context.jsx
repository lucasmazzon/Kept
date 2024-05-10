import { createContext, useEffect, useState } from "react";
import { translation } from '../../public/translation'


export const Context = createContext(null)



const getInicialState = () => {
    const language = localStorage.getItem('lang');
    return language && JSON.parse(language) 
}

export const ContextProvider = (props) => {
    const [sign, setSign] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState("En", getInicialState);


  useEffect(() => {
    localStorage.setItem('lang', JSON.stringify(selectedLanguage))
  },[selectedLanguage])


        const changeLanguage = (e) => {
            setSelectedLanguage(e.target.value)

            if(selectedLanguage === "En") {
                translation[0].en[0].content
            } else {
                translation[1].pt[0].content
            }
        
        }

        console.log(selectedLanguage)

        const contextValue = {
            sign, 
            setSign, 
            changeLanguage,
            selectedLanguage, 
            setSelectedLanguage,
            getInicialState
        }


    return(
        <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    )
}