import React from "react";
import Sidebar from "./Sidebar";
import LinkInNewTab from "./Links";

function Work() {
  return (
    <div className="pt-5 min-h-screen">
      <Sidebar />
      <div style={{ paddingLeft: "250px" }}>
        <h1
          className="pt-5 font-bold text-4xl"
          style={{ paddingLeft: "350px" }}
        >
          Work
        </h1>

        <div className="flex flex-1 flex-wrap	justify-start gap-4 pt-10 ml-10 ">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="">
              <img
                // style={{
                //   width: "100%",
                //   height: "100%",
                //   objectFit: "fill",
                //   objectPosition: "center",
                // }}
                class="rounded-t-lg"
                src="src/photos/Screenshot from 2023-07-20 16-08-57.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                The project is Amazon E-commerce clone web app that enables
                users to shop and order online.It has various features like user
                authentication, seaching items, order page, and many more.
              </p>
              <a
                href="https://epictours-frontend.vercel.app/"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <h1 className="text-white ">
                  <LinkInNewTab
                    url="https://challenge-bd883.web.app/"
                    text="Visit"
                  />
                </h1>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="">
              <img
                class="rounded-t-lg"
                src="src/photos/Screenshot from 2023-07-20 10-26-47.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                The project is a web app that enables users to book tours.It has
                various features like user authentication, seaching tours,
                booking tours, and many more.
              </p>
              <a
                href="https://epictours-frontend.vercel.app/"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <h1 className="text-white hover:text-black">
                  <LinkInNewTab
                    url="https://epictours-frontend.vercel.app/"
                    text="Visit"
                  />
                </h1>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-wrap	justify-start gap-4 pt-10 ml-10">
          <div class="max-w-sm mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              class="rounded-t-lg"
              src="src/photos/Screenshot from 2023-07-20 10-28-27.png"
              alt=""
            />

            <div class="p-5">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                The project is a web app that enables users to search for rental
                houses of their choice.It has various features like categorising
                house size, seaching location, Checking house details, and many
                more.
              </p>

              <a
                href="https://saka-keja-xy3n.vercel.app/"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <h1 className="text-white">
                  <LinkInNewTab
                    url="https://saka-keja-xy3n.vercel.app/"
                    text="Visit"
                  />
                </h1>
              </a>
            </div>
          </div>

          <div class="max-w-sm mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              class="rounded-t-lg"
              src="src/photos/Screenshot from 2023-07-20 18-27-52.png"
              alt=""
            />

            <div class="p-5">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                The project is a web app that enables users to search for rental
                houses of their choice.It has various features like categorising
                house size, seaching location, Checking house details, and many
                more.
              </p>

              <a
                href="https://croeng.vercel.app/"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <h1 className="text-white">
                  <LinkInNewTab url="https://croeng.vercel.app/" text="Visit" />
                </h1>
              </a>
            </div>
          </div>
        </div>

        <button
          className="bg-black text-white text-xl text-center rounded px-4 p-2 my-5 font-bold hover:bg-gray-500"
          style={{ marginLeft: "395px" }}
        >
          {" "}
          <LinkInNewTab url="https://github.com/Rawllings" text="More" />
        </button>
      </div>
      <div className="mt-2" style={{ marginLeft: "300px" }}>
        <hr />
      </div>
      <h1
        className="text-xl pl-20 text-gray-500 pt-4 mb-10"
        style={{ paddingLeft: "550px" }}
      >
        © {new Date().getFullYear()} Dev Rawllings All rights reserved
      </h1>
    </div>
  );
}

export default Work;
