import React from "react";
import Sidebar from "./Sidebar";
import { FaHtml5 } from 'react-icons/fa';
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoPython, BiLogoDjango, BiLogoPostgresql } from 'react-icons/bi';
import { SiRubyonrails, SiMysql, SiTypescript } from 'react-icons/si';
function About() {
  return (
    <div className="pt-5 min-h-screen ">
      <Sidebar />

      <h1
        className="text-4xl font-bold underline-offset-1"
        style={{ paddingLeft: "600px" }}
      >
        About me
      </h1>
      <p
        className=" pt-5 leading-normal whitespace-normal	"
        style={{ paddingLeft: "230px" }}
      >
        As a developer in coding websites and mobile applications, I am
        enthusiastic and passionate about learning and creating things <br /> 
        with code. Although I am still early in my journey, I have gained some
        basic knowledge and experience and am eager to continue <br /> expanding
        my skills, particularly in the areas of <strong>  HTML, CSS, JavaScript, React JS, Python, Ruby on Rails and MySQL.</strong>
      </p>

      <h3 className=" pt-5 text-2xl font-bold leading-normal underline pb-1 whitespace-normal" style={{ paddingLeft: "600px" }}>
        Experience
      </h3>
      <div className="grid grid-cols-5 gap-8" style={{ paddingLeft:"330px"}}>
        <h4 className="flex flex-col pt-4 hover:transform-1.5 "><span className="text-5xl  text-red-700 rounded	p-1" ><FaHtml5 /></span>  <strong> HTML5</strong></h4>
        <h4 className="flex flex-col pt-4"> <span className="text-5xl text-blue-600 rounded p-1 " style={{paddingLeft:"10px"}} ><BiLogoCss3 /></span><strong className="pl-4">  CSS3</strong></h4>
        <h4 className="flex flex-col pt-4"><span className="text-5xl  text-yellow-400 rounded	p-1 pl-4"  ><BiLogoJavascript /></span>  <strong > JavaScript</strong></h4>
        <h4 className="flex flex-col pt-4"><span className="text-5xl  text-blue-400 rounded	p-1"  ><BiLogoReact /></span> <strong>  React Js</strong></h4>
        <h4 className="flex flex-col pt-4"><span className="text-5xl  text-blue-700 rounded	p-1 pl-4"  ><SiTypescript /></span> <strong>  TypeScript </strong></h4>
        <h4 className="flex flex-col pt-4"><span className="text-5xl  text-red-600 rounded	p-1 pl-5" ><SiRubyonrails /></span>  <strong> Ruby on rails</strong></h4>
        <h4 className="flex flex-col pt-4"><span className="text-5xl  text-black rounded	p-1" ><BiLogoPython /></span> <strong>  Python</strong></h4>
        <h4 className="flex flex-col pt-4"><span className="text-5xl  text-green-900 rounded	p-1" ><BiLogoDjango /></span> <strong>  Django</strong></h4>
        <h4 className="flex flex-col pt-4"><span className="text-5xl  text-yellow-600 rounded	p-1" ><SiMysql /></span> <strong>  MySQL</strong></h4> 
        <h4 className="flex flex-col pt-4"><span className="text-5xl  text-blue-800 rounded	p-1 pl-3" ><BiLogoPostgresql /></span> <strong>  Postgresql</strong></h4>       
      

      </div>
      <div className="mt-12" style={{ marginLeft: "300px" }}>
          <hr />
        </div>
        <h1
          className="text-xl pl-20 text-gray-500 pt-4"
          style={{ paddingLeft: "550px" }}
        >
          © {new Date().getFullYear()}  Dev Rawllings All rights reserved
        </h1>
    </div>
  );
}

export default About;
