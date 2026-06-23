import { createContext, useState , useEffect } from "react";

export const langContext = createContext();

export const LangProvider = ({children}) => {
    const [lang , setLang] = useState(localStorage.getItem("lang") || "en")

    useEffect(()=>{
        localStorage.setItem("lang" , lang)
    },[lang])
    
    return <langContext.Provider value={{lang, setLang}}>
        {children}
    </langContext.Provider>
}