import { createContext , useState , useEffect } from "react";

export const Statecontext = createContext();

export const StateProvider = ({children})=>{
    const [logindata, setlogindata] = useState([]);
    const [signupdata, setsignupdata] = useState({
         name: '',
    number: '',
    email: '',
    password: '',
    company: '',
    agency: '',
    });

      useEffect(() => {
        console.log('Signup Data in Context changed:', signupdata);
    }, [signupdata]);

    return(
       <Statecontext.Provider value={{
        logindata , setlogindata,
        signupdata , setsignupdata
       }}>
        {children}
       </Statecontext.Provider>
    )
}