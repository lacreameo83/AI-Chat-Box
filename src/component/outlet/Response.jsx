import React, { useContext, useEffect, useRef, useState } from 'react'
import { GloblalContext } from '../../utilitie/GloblaContext';
import { Button } from '@mui/material';
import GeminiInput from './GeminiInput';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Response() {
    
  const {
    dartmode,
    setIsApiKey,
    setDisabledled,
    displayResult,
    message,
    loadingOutput,
    onSent,
    previousValue,
  } = useContext(GloblalContext);

 const [model,setModel]=useState(true)
 const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView();
    };

    // Trigger scroll when displayResult changes
    useEffect(() => {
      if (messagesEndRef.current) {
        scrollToBottom();
        console.log("Hello");
      }
    }, [displayResult]);

    const handleApiKey = () => {
      if (Api === "AIzaSyCbXVALuyy06u6v4A0qa2PGSVN9ojeFxGM") {
        setLoading(true);
        setTimeout(() => {
          SetApiOutput("successful");
        }, 2000);

        setTimeout(() => {
          setIsApiKey(true);

          setDisabledled(false);
          setIsApiTrue(true);
          setLoading(false);
          setTimeout(() => {
            SetApiOutput("");
          }, 2000);
        }, 3000);
      } else {
        setLoading(true);
        setTimeout(() => {
          SetApiOutput("wrong Api key");
          setLoading(false);
          setTimeout(() => {
            SetApiOutput("");
          }, 2000);
          setApi("");
        }, 3000);
      }
    };
    const handlesetDefsultkey = () => {
    //   setApi("AIzaSyCbXVALuyy06u6v4A0qa2PGSVN9ojeFxGM");
      setModel(false)
    };
    const handlegenarate = () => {
      onSent();
      
    };
  return (
    <div>
      <div className="flex flex-col h-[85vh] items-center justify-between ">
        <div className="h-[8vh] ">
          <div className="font-[900] flex items-center gap-1 shadow-sm p-2 rounded-md">
            <img
              className="h-[20px] w-[20px]"
              src="https://img.freepik.com/premium-vector/generate-ai-abstract-vector-symbol-artificial-intelligence-colorful-stars-icon_34480-1539.jpg"
            />
            <p className="text-[13px] text-[500] "> 3.4</p>
          </div>
        </div>
        <div className="h-[70vh]  w-[100vw] sm:w-[60vw]  displayResult overflow-x-scroll">
          {displayResult.map((el, index) => (
            <div key={index} className="flex flex-col gap-3   ">
              <div />
              <div className="  mt-6   h-[5vh]   justify-end   mb-5 flex items-center  gap-3 md:w-[50vw]">
                <div className="">{/* <AccountCircleOutlinedIcon /> */}</div>
                <div className="flex  rounded-lg items-center justify-between  w-fit ">
                  <div>
                    <AccountCircleIcon />
                  </div>
                  <p className="p-2 font-[600] text-[10px] text-[500] ">
                    {previousValue[index]}
                  </p>
                  {/* <CreateIcon sx={{ width: "12px" }} /> */}
                </div>
              </div>
              {/* start */}

              <div className="text-start  ">
                <div className="flex gap-2 items-start w-[90vw] md:w-[50vw]">
                  <img
                    className="w-[30px] h-[30px]"
                    src="https://img.freepik.com/premium-vector/generate-ai-abstract-vector-symbol-artificial-intelligence-colorful-stars-icon_34480-1539.jpg"
                  />
                  <div className="shadow-sm text-[11px] displayResult rounded-lg p-3 h-fit overflow-y-scroll lg:w-[70vw]">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: el,
                      }}
                    ></div>
                    <div ref={messagesEndRef} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <GeminiInput />
        </div>
      </div>

      {/* Model side first display */}
      {model && (
        <div className="h-[100vh] w-[100vw] sm:w-[79vw] bg-[rgba(216,214,175,0.1)] absolute top-0 right-3 flex items-center justify-center ">
          <div
            style={{
              color: dartmode && "white",
              borderWidth: dartmode && "2px",
              borderColor: dartmode && "blue",
              boxShadow: dartmode && "1x 1px 1px blue",
              padding: dartmode && "4px",
              borderRadius: "20px",
            }}
            className="w-[96%] bg-white pb-4 h-fit md:w-[60vw] md:h-[50vh] lg:w-[40vw] py-2 text-[15px] shadow-lg flex flex-col items-center gap-y-5"
          >
            <div className="font-[900] absolute left-[80px] sm:left-[350px] top-[65px] sm:top-[60px] flex items-center gap-1 shadow-sm p-2 rounded-md">
              <img
                className="h-[20px] w-[20px]"
                src="https://img.freepik.com/premium-vector/generate-ai-abstract-vector-symbol-artificial-intelligence-colorful-stars-icon_34480-1539.jpg"
              />
              <h3 className="text-[12px] text-[500]">Gemini</h3>
            </div>

            <div className="flex flex-col gap-y-3  items-center">
              <h2 className="font-[700] text-[15px]">
                Enter your Gemini API Key
              </h2>
              <p className="text-[500] text-[12px]">
                you need an Gemini API to use Horizon Chat UI.
              </p>
              <p className="text-[500] text-[12px]">
                Your API Key is stored locally on your brower and
              </p>
              <p className="text-[500] text-[12px]">never sent anywhere else</p>
            </div>
            {/* for the input dev */}
            <div className="flex flex-col gap-y-1">
              <div className="flex items-center gap-2">
                <input
                  className="border text-[11px]  outline-none p-1 px-2 rounded-3xl"
                  type="text"
                  placeholder="  xxxxxxxxxxxxxxxxxxx"
                  //   value={Api}
                  //   onChange={hangleApiInput}
                />
                <Button
                  sx={{
                    height: "30px",
                    background:
                      "linear-gradient(to right bottom, #7BCBD4, #29C6B7)",
                    borderRadius: "20px",
                    fontSize: "10px",
                  }}
                  variant="contained"
                  onClick={handleApiKey}
                  //   disabled={loading}
                  //   startIcon={loading ? <CircularProgress size={20} /> : null}
                >
                  {/* {loading ? "Loading..." : "Save"} */} save
                </Button>
              </div>
              <div className="flex items-center justify-center gap-y-1 text-[12px]">
                <a
                  href="https://ai.google.dev/gemini-api/docs/api-key"
                  className="text-purple-400 text-[10px]"
                >
                  Get your API Key
                </a>

                <span className="px-1 text-[10px]"> or </span>
                <div
                  onClick={handlesetDefsultkey}
                  className="text-purple-400 text-[10px] relative"
                >
                  use Default key
                </div>
              </div>
            </div>
            {/* <p className="font-[700]">your Api Key is not working</p> */}
            <p className="text-[500] text-[12px]">
              The app will connect to Gemini Api server to check if
            </p>
            <p className="text-[500] text-[12px]">
              your API is working properly
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Response
