/* eslint-disable @next/next/no-img-element */
'use client'
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark bg-theme-950">
      <div className="relative font-sans antialiased min-h-screen flex flex-col">

        <div className="space-y-12 py-12">
          <section className="site-container">
            <div className="relative flex items-center space-x-6">
              <img
                className="rounded-full max-w-[33%] md:max-w-[200px] h-auto bg-gradient-to-br from-theme-600/10 to-theme-600/70"
                src="/assets/headshot-square.png"
                alt="Headshot"
              />
              <h1 className="relative z-10 sm:flex sm:flex-col sm:space-y-1.5 font-bold text-3xl sm:text-5xl md:text-6xl text-theme-200">
                <div>Fullstack</div>
                <div>Developer</div>
                <div className="whitespace-nowrap grayscale">in Vancouver</div>
              </h1>
            </div>
          </section>

          <section className="site-container">
            <div className="prose prose-lg prose-invert text-chrome-300 relative z-20">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <svg className="text-white w-10 h-auto mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144">
                    <path d="M72 119.9c-2.6 0-4.8-2.1-4.8-4.8V28.9c0-2.6 2.1-4.8 4.8-4.8 2.6 0 4.8 2.1 4.8 4.8v86.2c0 2.6-2.2 4.8-4.8 4.8zM52 76.8H29c-2.6 0-4.8-2.1-4.8-4.8 0-2.7 2.1-4.8 4.8-4.8h23c2.6 0 4.8 2.1 4.8 4.8 0 2.7-2.2 4.8-4.8 4.8zM115.1 76.8H92c-2.6 0-4.8-2.1-4.8-4.8 0-2.7 2.1-4.8 4.8-4.8h23c2.6 0 4.8 2.1 4.8 4.8 0 2.7-2.1 4.8-4.7 4.8z"></path>
                    <path d="M72 144c-39.7 0-72-32.3-72-72S32.3 0 72 0s72 32.3 72 72-32.3 72-72 72zM72 9.6C37.6 9.6 9.6 37.6 9.6 72s28 62.4 62.4 62.4 62.4-28 62.4-62.4S106.4 9.6 72 9.6z"></path>
                  </svg>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="leading-none text-lg">Ruby on Rails Developer &amp; Digital Marketer</div>
                  <a href="https://transistor.fm/" target="_blank" className="no-underline">
                    <span className="text-base leading-none group font-medium">
                      <span className="mr-1 text-chrome-400 font-normal">at</span>
                      <span className="font-medium text-white">Transistor.fm</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-theme-800 transition-colors duration-300 group-hover:text-theme-400 inline relative -right-1 -top-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                      </svg>
                    </span>
                  </a>
                  <div className="relative text-xs -mx-1 flex flex-wrap">
                    <span className="text-[.6rem] tracking-wide rounded bg-chrome-800 font-mono text-theme-400 lowercase font-medium m-1 px-1 py-0">Marketing</span>
                    <span className="text-[.6rem] tracking-wide rounded bg-chrome-800 font-mono text-theme-400 lowercase font-medium m-1 px-1 py-0">TailwindCSS + AlpineJS</span>
                    <span className="text-[.6rem] tracking-wide rounded bg-chrome-800 font-mono text-theme-400 lowercase font-medium m-1 px-1 py-0">Statamic CMS</span>
                    <span className="text-[.6rem] tracking-wide rounded bg-chrome-800 font-mono text-theme-400 lowercase font-medium m-1 px-1 py-0">Ruby on Rails</span>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="site-container flex flex-col md:flex-row gap-x-6 gap-y-12">
            <div className="prose prose-lg prose-invert text-chrome-300 flex-1" x-data="{ showAll: false }">
              <h2>Jobs</h2>
              <ul x-data="{ counter: 0 }" className="!space-y-7 list-none pl-0 [&>li]:px-0">
              </ul>
              {!showAllJobs && (
                <div className="flex pt-3">
                  <button
                    onClick={() => setShowAllJobs(true)}
                    type="button"
                    className="text-sm px-3 py-1 border border-chrome-900 hover:bg-chrome-900 text-chrome-700 font-medium rounded transition-colors duration-300"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>

            {/* Projects */}
            <div className="prose prose-lg prose-invert text-chrome-300 flex-1" x-data="{ showAll: false }">
              <h2>Projects</h2>
              <ul x-data="{ counter: 0 }" className="!space-y-7 list-none pl-0 [&>li]:px-0">
              </ul>
              {!showAllProjects && (
                <div className="flex pt-3">
                  <button
                    onClick={() => setShowAllProjects(true)}
                    type="button"
                    className="text-sm px-3 py-1 border border-chrome-900 hover:bg-chrome-900 text-chrome-700 font-medium rounded transition-colors duration-300"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          </section>

        </div>


        <footer className="mt-auto py-12 bg-chrome-950">
      <div className="site-container">
        <ul className="space-y-4 flex items-center space-x-4">
          <li className="flex items-center">
            <h4 className="font-bold text-white">Social:</h4>
            <a
              target="_blank"
              className="font-normal inline-flex space-x-1 text-chrome-500 hover:text-chrome-50"
              href="https://twitter.com/joshuaanderton"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-5 h-auto">
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a
              target="_blank"
              className="font-normal inline-flex space-x-1 text-chrome-500 hover:text-chrome-50"
              href="https://www.linkedin.com/in/joshuaanderton"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-auto">
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li className="flex items-center">
            <h4 className="font-bold text-white">Podcast:</h4>
            <a
              target="_blank"
              className="font-normal inline-flex space-x-1 text-chrome-500 hover:text-chrome-50"
              href="https://www.gettingtoramen.com/"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-auto">
                <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                <path
                  d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z"
                />
              </svg>
              <span>Getting To Ramen</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
      </div>
    </main>
  );
}
