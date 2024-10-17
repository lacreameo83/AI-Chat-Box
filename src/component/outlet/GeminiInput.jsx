import React, { useContext, useState } from 'react'
import { Button } from '@mui/material';
import { GloblalContext } from '../../utilitie/GloblaContext';

function GeminiInput() {
    const { dartmode, disabled, inputData, setInputData ,onSent} =
      useContext(GloblalContext);
    // const [disabled, setDisabledled] = useState("disabled");
  return (
    <div className="flex items-center gap-2">
      <input
        onChange={(e) => setInputData(e.target.value)}
        value={inputData}
        disabled={disabled}
        placeholder=" send a message"
        type="text"
        className="border rounded-3xl p-2 w-[250px] md:w-[500px] outline-none"
      />
      <Button
        onClick={()=>onSent()}
        disabled={disabled}
        variant="contained"
        sx={{
        
          color: dartmode ? "white" : "black",
          borderColor: dartmode ? "white" : "black",
          borderWidth: dartmode ? "2px" : "2px",
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default GeminiInput
