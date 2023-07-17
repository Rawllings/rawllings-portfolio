import React from "react";
// import Typewriter from "typewriter-effect";
import Typewriter from "typewriter-effect";
import Sidebar from "./Sidebar";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import LinkInNewTab from "./Links";

function Landing() {

  return (
    <div>
      <Sidebar />

      <div
        className="right__side bg-white text-center text-yellow-500 min-h-screen m-0"
        style={{ marginLeft: "300px", paddingTop: "100px" }}
      >
        <h1 className="font-black text-6xl text-black">
          <span>Hello, I am Rawllings. I am a</span>
          <span className="text-yellow-500 text-6xl ml-5 pl-10 ">
            <Typewriter
              options={{
                strings: [
                  "Graphics designer,",
                  "Web developer,",
                  "Front-end developer,",
                  "and a",
                  "Back-end developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>

        <div>
          <a href="/contacts">
          <button
            type="submit"
            className="bg-black text-white font-bold p-2 px-4 mt-20 rounded text-xl hover:bg-gray-500"
          >
            Contact
          </button>
          </a>
          
        </div>

        <div className="mt-20" style={{ marginLeft: "" }}>
          <hr />
        </div>
        <div
          className="flex flex-row gap-8 text-2xl text-center pl-20 pt-10"
          style={{ paddingLeft: "370px" }}>
        
            <h1 className="text-gray-500 hover:text-blue-700">
            <LinkInNewTab url="https://www.linkedin.com/in/rawllings-kiprop-a23b5b258/" text= {<FaLinkedinIn />} />
              
            </h1>

            <h1 className="text-gray-500 hover:text-blue-500">
            <LinkInNewTab url="https://twitter.com/Senior_chieff" text= {<FaTwitter />} />
              
            </h1>
        
          
            <h1 className="text-gray-500 hover:text-black">
            <LinkInNewTab url="https://github.com/Rawllings" text= {<FaGithub />} />
            </h1>
       
        </div>
        <h1
          className="text-xl pl-20 text-gray-500 pt-4"
          style={{ paddingLeft: "50px" }}
        >
          © Dev Rawllings All rights reserved
        </h1>
      </div>
    </div>
  );
}

export default Landing;
