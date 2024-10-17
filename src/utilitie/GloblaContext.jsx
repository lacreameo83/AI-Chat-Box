import { createContext, useState } from "react";
import run from "../config/gemini";
export const  GloblalContext =createContext("")

function GloblalContextProvider({children}) {
const [dartmode,setDarkmode]=useState(false)
const [isApiKey,setIsApiKey]=useState(false)
 const [disabled, setDisabledled] = useState(true);

//  for the input for searching
const [inputData,setInputData]=useState("")
const [displayResult,setDisplayResult]=useState('')
const [message, setMessage] = useState(false);
const [loadingOutput, setloadingOutput] = useState(false);
const [previousValue,setpreviousValue]=useState([])

const onSent = async (prompt)=>{
setMessage(true);
setloadingOutput(true);
setTimeout(() => {
    setloadingOutput(false);
}, 5000);

const response = await run(inputData);

 setDisplayResult(response);
 setpreviousValue((prev)=>([...prev,inputData]))
 
 
}

// onSent("what is react")
 const contextValue = {
   dartmode,
   setDarkmode,
   isApiKey,
   setIsApiKey,
   disabled,
   setDisabledled,
   inputData,
   setInputData,
   onSent,
   displayResult,
   message,
   previousValue,
   loadingOutput,
 };

    return (
      <GloblalContext.Provider value={contextValue}>
        {children}
      </GloblalContext.Provider>
    );
}

export default GloblalContextProvider;