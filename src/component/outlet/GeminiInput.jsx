import React, { useContext, useState } from 'react'
import { Button } from '@mui/material';
import { GloblalContext } from '../../utilitie/GloblaContext';

function GeminiInput() {
    const { dartmode, disabled, inputData, setInputData ,onSent} =
      useContext(GloblalContext);
    console.log(inputData);
    
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
        onClick={() => onSent()}
        variant="contained"
        sx={{
          color: dartmode ? "white" : "white",
          borderRadius: "25px",
          background: "linear-gradient(to right bottom, #4A25E1, #7B5AFF)",
width:"150px",
          fontSize: "10px",
          height:"6vh"
          
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default GeminiInput
