import React from "react";
import Sidebar from "./Sidebar";
import { FaTwitter, FaLinkedinIn, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import LinkInNewTab from "./Links";

function Contacts() {
  return (
    <div>
      <Sidebar />
      <div style={{ paddingLeft: "250px" }}>
        <div className="w-1/3">
          <h1
            className="pt-5 font-bold text-4xl underline underline-offset-8 "
            style={{ paddingLeft: "350px" }}
          >
            Contacts
          </h1>
        </div>

        <div className="flex flex-row" style={{marginTop:"60px"}}>

{/* LEFT SIDE  */}

          <div className="flex flex-row">
            <div className=" ">
              <div className=" text-center">
                <h1 className="text-2xl font-semibold">Contact Me</h1>
                <h1 className="pt-5 flex">  <span className="pr-3 text-xl"><MdOutlineMail /></span> rawllingskiprop@gmail.com</h1>
                <h1 className="pt-5 pl-10 flex">  <span className="pr-3 text-xl"><FaPhoneAlt /></span> +254727371199</h1>
              </div>
              <div className="flex flex-row gap-2 text-2xl pl-20 pt-10">
                <h1 className="text-gray-500 hover:text-blue-700">
                  <LinkInNewTab
                    url="https://www.linkedin.com/in/rawllings-kiprop-a23b5b258/"
                    text={<FaLinkedinIn />}
                  />
                </h1>

                <h1 className="text-gray-500 hover:text-blue-500">
                  <LinkInNewTab
                    url="https://twitter.com/Senior_chieff"
                    text={<FaTwitter />}
                  />
                </h1>

                <h1 className="text-gray-500 hover:text-black">
                  <LinkInNewTab
                    url="https://github.com/Rawllings"
                    text={<FaGithub />}
                  />
                </h1>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE  */}

          <div className="grid gap-0 pt-9" style={{paddingLeft:"200px"}}>
            <form action="" className=" flex flex-col w-full">
              <input
                type="text"
                placeholder="Your name"
                className="border-2 border-blue-200 rounded p-2 mb-5 bg-gray-200"
              />
              <input
                type="email"
                placeholder="Your email"
                className="border-2 border-blue-200 rounded p-2 mb-5 bg-gray-200"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your message"
                className="border-2 border-blue-200 rounded p-2 mb-5 h-24 bg-gray-200 w-full"
              />
              <input type="submit" className="bg-black text"/>
            </form>
          </div>
        </div>
       
      </div>

      <div className="mt-20" style={{ marginLeft: "300px" }}>
          <hr />
        </div>
        <h1
          className="text-xl pl-20 text-gray-500 pt-4"
          style={{ paddingLeft: "550px" }}
        >
          © Dev Rawllings All rights reserved
        </h1>
      
    </div>
  );
}

export default Contacts;
