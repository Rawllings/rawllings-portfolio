import React from "react";
import Sidebar from "./Sidebar";
import { BsCodeSlash } from "react-icons/bs";
import { SiPeakdesign } from "react-icons/si";
import { MdOutlineDesktopWindows } from "react-icons/md";

function Services() {
  return (
    <div className="pt-5 min-h-screen">
      <Sidebar />

      <div style={{ paddingLeft: "270px" }}>
        <h1
          className="pt-0 font-bold text-4xl underline underline-offset-8"
          style={{ paddingLeft: "350px" }}
        >
          My Services
        </h1>

        

        <div className="flex flex-row gap-4 pt-5">
          {/* WEB DEVELOPMENT  */}
          <div class="block max-w-sm p-3 text-center bg-gray-200 border border-gray-200 rounded-lg shadow hover:-translate-y-2 transition duration-300
           hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1
              style={{ paddingLeft: "120px" }}
              className="py-2 text-2xl font-bold"
            >
              <BsCodeSlash />
            </h1>
            <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Web Development
            </h1>
            <p class="font-normal text-gray-700 dark:text-gray-400 mb-10">
              I create the layout and design <br />
              of a full website. I use design <br />
              programs to create visual elements. <br />
              I build a site that is intuitive <br />
              and easy for visitors to navigate.
            </p>
          </div>

          {/* UI/UX DESIGN  */}

          <div class="block max-w-sm p-3 text-center bg-gray-200 border border-gray-200 rounded-lg shadow hover:-translate-y-2 transition duration-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1
              style={{ paddingLeft: "120px" }}
              className="py-2 text-2xl font-bold"
            >
              <SiPeakdesign />
            </h1>
            <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              UI/UX Design
            </h1>
            <p class="font-normal text-gray-700 dark:text-gray-400 mb-10">
              I create user-friendly interfaces <br />
              that enable users to understand <br />
              how to use complex technical products.
            </p>
          </div>

          {/* GRAPHICS DESIGN  */}
          <div class="block max-w-sm p-3 text-center bg-gray-200 border border-gray-200 rounded-lg shadow hover:-translate-y-2 transition duration-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1
              style={{ paddingLeft: "120px" }}
              className="py-2 text-2xl font-bold"
            >
              <MdOutlineDesktopWindows />
            </h1>
            <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Graphics Design
            </h1>
            <p class="font-normal text-gray-700 dark:text-gray-400 mb-10">
              Transforming ideas into captivating <br />
              visuals through innovative design <br />
              techniques that captivate audiences <br />
              and enhance brand identities with <br />
              striking creativity and attention <br />
              to detail.
            </p>
          </div>
        </div>




      </div>

      <div className="" style={{ marginLeft: "300px", marginTop: "115px" }}>
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

export default Services;
