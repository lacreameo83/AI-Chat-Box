import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import GeminiInput from "./GeminiInput";
import { GloblalContext } from "../../utilitie/GloblaContext";
import CircularProgress from "@mui/material/CircularProgress"; 
import { Link } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import image from '../../../public/1671100359865.jpg'
import RefreshIcon from "@mui/icons-material/Refresh";

function GeminiApi() {
  const {
    dartmode,
    setIsApiKey,
    setDisabledled,
    displayResult,
    message,
    inputData,
    loadingOutput,
    setInputData,
    onSent,
    previousValue,
  } = useContext(GloblalContext);
  const [ApiOutPut, SetApiOutput] = useState("");
  const [Api, setApi] = useState("");
  const [loading, setLoading] = useState(false);
  const [isApitrue, setIsApiTrue] = useState(false);
  const [defaultKey,setDefsultkey]=useState(false)
  

  const hangleApiInput = (e) => {
    setApi(e.target.value);
  };

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
const handlesetDefsultkey =()=>{
  setApi("AIzaSyCbXVALuyy06u6v4A0qa2PGSVN9ojeFxGM");
}
const handlegenarate =()=>{
onSent()
}

const date = new Date().getFullYear()
  return (
    <div className="relative">
      {ApiOutPut && (
        <div className="bg-stone-100 left-[28%] shadow-lg h-[5vh] w-[50vw] top-[10px]  flex items-center justify-center absolute md:left-[40%] z-30  md:w-[15vw]">
          <p
            className={
              ApiOutPut === "successful"
                ? "text-green-500 text-[20px]"
                : "text-red-500 text-[15px]"
            }
          >
            {ApiOutPut}
          </p>
        </div>
      )}

      <div className="flex flex-col justify-between h-[87vh] items-center">
        {!isApitrue ? (
          <div className="mt-3 flex flex-col items-center">
            <div className="font-[900] flex items-center gap-1 shadow-md px-2 rounded-md">
              <img
                className="h-[40px] w-[40px]"
                src="https://img.freepik.com/premium-vector/generate-ai-abstract-vector-symbol-artificial-intelligence-colorful-stars-icon_34480-1539.jpg"
              />
              <h3>Gemini</h3>
            </div>
            <p
              style={{ color: dartmode && "white" }}
              className="text-[10px] my-2"
            >
              No plugins enabled
            </p>
          </div>
        ) : (
          <div className="mt-3 flex flex-col items-center">
            <div className="font-[900] flex items-center gap-1 shadow-md px-2 rounded-md">
              <img
                className="h-[40px] w-[40px]"
                src="https://img.freepik.com/premium-vector/generate-ai-abstract-vector-symbol-artificial-intelligence-colorful-stars-icon_34480-1539.jpg"
              />
              <h3>Chart AI</h3>
            </div>
            <p
              style={{ color: dartmode && "white" }}
              className="text-[10px] my-2"
            >
              How can i help you today?
            </p>
          </div>
        )}

        {isApitrue ? (
          <div>
            {message ? (
              <div
                style={{
                  color: dartmode && "white",
                  borderWidth: dartmode && "2px",
                  borderColor: dartmode && "blue",
                  boxShadow: dartmode && "1x 1px 1px blue",
                  padding: dartmode && "4px",
                }}
                className=" displayResult overflow-y-scroll w-[99vw] h-[50vh] md:w-[60vw] p-4 md:h-[60vh] text-[15px]  flex flex-col items-center gap-2"
              >
                {displayResult ? (
                  <div>
                    {loadingOutput ? (
                      <div className=" h-[50vh] w-[50vw]  text-start">
                        <hr className="hr" />
                        <hr className="hr" />
                        <hr className="hr" />
                      </div>
                    ) : (
                      displayResult.map((el, index) => (
                        <div key={index} className="flex flex-col gap-3">
                          <div className="  mt-6  h-[5vh] ml-[42vw] lg:ml-[10vw]    mb-5 flex items-center  gap-3 md:w-[50vw]">
                            <div className="">
                              <img
                                className="h-[30px] w-[30px] rounded-[100%]  "
                                src={image}
                              />
                            </div>
                            <div className="flex  rounded-lg items-center justify-between border w-fit ">
                              <p className="p-2 font-[600] text-sm ">
                                {previousValue[index]}
                              </p>
                              <CreateIcon sx={{ width: "12px" }} />
                            </div>
                          </div>
                          {/* start */}

                          <div className="text-start  ">
                            <div className="flex gap-2 items-start w-[90vw] md:w-[50vw]">
                              <img
                                className="w-[40px] h-[50px]"
                                src="https://img.freepik.com/premium-vector/generate-ai-abstract-vector-symbol-artificial-intelligence-colorful-stars-icon_34480-1539.jpg"
                              />
                              <div className="shadow-md displayResult rounded-lg p-3 h-fit overflow-y-scroll lg:w-[70vw]">
                                <p className="font-[900]">Answer </p>

                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: el,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="h-[50vh] w-[50vw] bg-black object-fill opacity-5 flex items-center justify-center">
                <img
                  className="h-[50vh] w-[50vw]"
                  src="https://static.wixstatic.com/media/64c978_f87865c123a64c26ab710873be8570fc~mv2.jpeg/v1/fill/w_200,h_244,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/64c978_f87865c123a64c26ab710873be8570fc~mv2.jpeg"
                />
              </div>
            )}
          </div>
        ) : (
          <div
            style={{
              color: dartmode && "white",
              borderWidth: dartmode && "2px",
              borderColor: dartmode && "blue",
              boxShadow: dartmode && "1x 1px 1px blue",
              padding: dartmode && "4px",
            }}
            className="w-[96%] pb-4 h-fit md:w-[60vw] md:h-[40vh] lg:w-[30vw] text-[15px] shadow-lg flex flex-col items-center gap-2"
          >
            <h2 className="font-[700] text-[16px]">
              Enter your Gemini API Key
            </h2>
            <p>you need an Gemini API to use Horizon Chat UI.</p>
            <p>Your API Key is stored locally on your brower and</p>
            <p>never sent anywhere else</p>
            <div className="flex items-center gap-2">
              <input
                className="border text-[11px] outline-none p-1 px-2 rounded-3xl"
                type="text"
                placeholder="  xxxxxxxxxxxxxxxxxxx"
                value={Api}
                onChange={hangleApiInput}
              />
              <Button
                sx={{
                  height: "30px",
                  backgroundColor: "#7BCBD4",
                  borderRadius: "20px",
                  fontSize: "10px",
                }}
                variant="contained"
                onClick={handleApiKey}
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} /> : null}
              >
                {loading ? "Loading..." : "Save"}
              </Button>
            </div>
            <div className="flex items-center gap-1 text-[12px]">
              <a
                href="https://ai.google.dev/gemini-api/docs/api-key"
                className="text-purple-400"
              >
                Get your API Key
              </a>
              <span> or </span>
              <div
                onClick={handlesetDefsultkey}
                className="text-purple-400 relative"
              >
                use Default key
              </div>
            </div>
            <p className="font-[700]">your Api Key is not working</p>
            <p>The app will connect to Gemini Api server to check if</p>
            <p>your API is working properly</p>
          </div>
        )}
        {/* Regenarate */}
        {isApitrue ? (
          <div
            onClick={handlegenarate}
            className="flex items-center gap-2 border p-1 rounded-3xl w-[50vw] h-[6vh] md:w-[22vw] lg:w-[12vw] "
          >
            <RefreshIcon sx={{ width: "19px" }} />
            <p>Regenerate response</p>
          </div>
        ) : null}
        {/* the input */}
        <div className="mb-2">
          <GeminiInput />
        </div>
      </div>
      <div
        style={{
          backgroundColor: dartmode ? "black" : "white",
          color: dartmode ? "white" : "black",
        }}
        className="grid grid-cols-1 h-[6vh]   md:h-[3vh] text-[10px] px-5 bg-stone-200 md:flex items-center  justify-between"
      >
        {/* footer */}
        <div className="order-2 md:order-1 ]">
          <p>@{date} Horizon UI Template All Rights Reserved</p>
        </div>
        <div className="order-1 md:order-2">
          <ul className="flex gap-2 items-center">
            <Link to="/">
              <li>Homepage</li>
            </Link>

            <li>License</li>
            <li>Terms of Use</li>
            <li>PrivacyPolicy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GeminiApi;
