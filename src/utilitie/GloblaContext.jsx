import { createContext, useState } from "react";
import run from "../config/gemini";
import { formControlClasses } from "@mui/material";
export const  GloblalContext =createContext("")

function GloblalContextProvider({children}) {
const [dartmode,setDarkmode]=useState(false)
const [isApiKey,setIsApiKey]=useState(false)
 const [disabled, setDisabledled] = useState(true);

//  for the input for searching
const [inputData,setInputData]=useState("")
const [displayResult,setDisplayResult]=useState([])
const [message, setMessage] = useState(false);
const [loadingOutput, setloadingOutput] = useState(false);
const [previousValue,setpreviousValue]=useState([])
const [ispreviousValue,setispreviousValue]=useState(false)
// display of input
const [displayInput,setDisplayInput]=useState(false)


// funtion to triger the response
const onSent = async (prompt)=>{
setMessage(true);
setloadingOutput(true);
setTimeout(() => {
    setloadingOutput(false);
}, 2000);

const response = await run(inputData);
let responseArray = response.split("**")
let newResponse = "";
for (let i = 0; i < responseArray.length; i++) {
  if (i === 0 || i % 2 !== 1) {
    newResponse += responseArray[i]
  }else {
    newResponse += "<b><br>" + responseArray[i]+ "</br></b>"
  }
}
let response2 = newResponse.split("*")
let newresponse2 = "";
for (let i = 0; i < response2.length; i++) {
  if (i === 0 || i % 2 !== 1) {
     newresponse2 += response2[i];
     
  } else {
    newresponse2 += "";
   
  }
}

  setDisplayResult((element1) => [...element1, newresponse2]);

     

 
 setDisplayInput(true)
 setpreviousValue((prev)=>([...prev,inputData]))
 setispreviousValue(true)
setInputData("")
 return
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
   ispreviousValue,
   displayInput,
 };

    return (
      <GloblalContext.Provider value={contextValue}>
        {children}
      </GloblalContext.Provider>
    );
}

export default GloblalContextProvider;