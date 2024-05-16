/* eslint-disable @next/next/no-img-element */
'use client'
import { GithubIcon, LaptopProgrammingIcon, LinkSquare02Icon, NewJobIcon } from "@/components/icons";
import { jobs, projects, skills } from "@/constants/data";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <>
      <div className="relative font-sans antialiased min-h-screen flex flex-col">
        <div className="fixed left-0 top-0 z-[100000] h-[100vh] pointer-events-none">
          <div className="absolute w-full h-full left-0 top-0 z-10 pointer-events-none" style={{
            // backgroundImage: 'url(\'/assets/noise.png\')',
            backgroundPosition: '50% center',
            backgroundSize: '10% 10%'
          }}></div>
        </div>

        <div className="space-y-12 py-12">
          <section className="site-container">
            <div className="relative flex items-center space-x-6">
              <img
                className="rounded-full max-w-[33%] md:max-w-[200px] h-auto bg-gradient-to-br from-theme-600/10 to-theme-600/70"
                src="/assets/20240127_181556-removebg.png"
                alt="Headshot"
              />
              <h1 className="relative z-10 sm:flex sm:flex-col sm:space-y-1.5 font-bold text-3xl sm:text-5xl md:text-6xl text-theme-200">
                <div>Dhaval Dubariya</div>
                <div className="text-4xl whitespace-wrap grayscale">
                  <h2>Backend Developer</h2>
                </div>
              </h1>
            </div>
          </section>

          <section className="site-container">
            <div className="prose prose-lg prose-invert text-chrome-300 relative z-20">
              <div className="flex flex-col items-start gap-4">
                <div className="flex  shrink-0">
                  <svg className="text-white w-10 h-auto mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144">
                    <path d="M72 119.9c-2.6 0-4.8-2.1-4.8-4.8V28.9c0-2.6 2.1-4.8 4.8-4.8 2.6 0 4.8 2.1 4.8 4.8v86.2c0 2.6-2.2 4.8-4.8 4.8zM52 76.8H29c-2.6 0-4.8-2.1-4.8-4.8 0-2.7 2.1-4.8 4.8-4.8h23c2.6 0 4.8 2.1 4.8 4.8 0 2.7-2.2 4.8-4.8 4.8zM115.1 76.8H92c-2.6 0-4.8-2.1-4.8-4.8 0-2.7 2.1-4.8 4.8-4.8h23c2.6 0 4.8 2.1 4.8 4.8 0 2.7-2.1 4.8-4.7 4.8z"></path>
                    <path d="M72 144c-39.7 0-72-32.3-72-72S32.3 0 72 0s72 32.3 72 72-32.3 72-72 72zM72 9.6C37.6 9.6 9.6 37.6 9.6 72s28 62.4 62.4 62.4 62.4-28 62.4-62.4S106.4 9.6 72 9.6z"></path>
                  </svg>
                  <h2 className="p-0 m-0">Skills</h2>
                </div>
                <div>
                  <div className="relative text-xs -mx-1 flex flex-wrap">
                    {skills.map((s) => (
                      <span key={s} className="text-[.8rem] tracking-wide rounded bg-chrome-800 font-mono text-theme-400 font-medium m-1 px-3 py-1">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="site-container flex flex-col md:flex-row gap-x-6 gap-y-12">
            <div className="prose prose-lg prose-invert text-chrome-300 flex-1">
              <div className="flex gap-1 shrink-0">
                <NewJobIcon
                  height={40}
                  width={40}
                  color={"#FFFFFF"}
                />
                <h2 className="p-0 m-0">Jobs</h2>
              </div>
              <ul className="!space-y-7 list-none pl-0">
                {jobs.map((job, index) => (
                  <li key={index}>
                    <div className="flex justify-between">
                      <span className="leading-none text-lg">
                        {job.role}
                      </span>
                      {!job.company && <span className="text-white text-sm">{job.time}</span>}
                    </div>
                    {job.company && <div className="text-base flex items-baseline justify-between">
                      <div>
                        <span className="mr-1">at</span>
                        <span className="font-medium text-white">{job.company}</span>
                      </div>
                      <span className="text-white text-sm">{job.time}</span>
                    </div>}
                    {/* <div className="mt-0 flex items-baseline justify-between gap-3">
                      <div className="no-underline hover:underline text-white text-[22px]">
                          {job.company}
                      </div>
                      <span className="text-white text-sm">{job.time}</span>
                    </div>
                    <ul className="text-base">
                      {job.description.map((item, i) => (
                        <li key={i}>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul> */}
                  </li>
                ))}
              </ul>
            </div>
          </section>


          <section className="site-container flex flex-col md:flex-row gap-x-6 gap-y-12">
            <div className="prose prose-lg prose-invert text-chrome-300 flex-1">
              <div className="flex gap-1 shrink-0">
                <LaptopProgrammingIcon
                  height={40}
                  width={40}
                  color={"#FFFFFF"}
                />
                <h2 className="p-0 m-0">Projects</h2>
              </div>
              <ul className="!space-y-7 list-none pl-0">
                {projects.slice(0, showAllProjects ? projects.length : 3).map((project, index) => (
                  <li key={index}>
                    <div className="flex items-baseline justify-between gap-3">
                      <div className="no-underline hover:underline text-white text-[22px]">
                        <span>{project.name}</span>
                      </div>
                      <div className="text-white text-sm flex items-baseline gap-0.5">
                        <a href={project.github} target="_blank">
                        {/* Github */}
                        <span>
                          <LinkSquare02Icon
                            height={13}
                            width={13}
                            color={"#FFFFFF"}
                          />
                        </span>
                        </a>
                      </div>
                      {/* <div>
                        <a className="flex items-baseline	gap-1 grayscale no-underline hover:no-underline text-sm text-white text-sm" target="_blank" href={project.github}>
                          Github
                          <span>
                            <LinkSquare02Icon
                              height={13}
                              width={13}
                              color={"#FFFFFF"}
                            />
                          </span>
                        </a>
                      </div> */}
                    </div>
                    {project.technology.map((s) => (
                      <span key={s} className="text-[12px] tracking-wide rounded bg-chrome-800 font-mono text-theme-400 m-1 px-1.5 py-0.5">{s}</span>
                    ))}
                    <ul className="text-base">
                      {project.description.map((item, i) => (
                        <li key={i}>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 font-bold text-chrome-600 text-xs">
                      {/* {project.github && (
                        <div>
                          <a className="font-bold text-inherit hover:no-underline" target="_blank" href={project.github}>
                            <span>Github</span>
                          </a>
                        </div>
                      )} */}
                    </div>
                  </li>
                ))}
              </ul>
              {!showAllProjects && (
                <div className="flex pt-3">
                  <button onClick={() => setShowAllProjects(true)} type="button" className="text-sm px-3 py-1 border border-chrome-900 hover:bg-chrome-900 text-chrome-700 font-medium rounded">
                    Load More
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>

        <footer className="mt-auto py-12 bg-chrome-950">
          <div className="site-container">
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <h4 className="font-bold text-white">Social:</h4>
                <a
                  target="_blank"
                  className="font-normal inline-flex space-x-1 text-chrome-500 hover:text-chrome-50"
                  href="https://twitter.com/dhavaldubariya"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-5 h-auto">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  target="_blank"
                  className="font-normal inline-flex space-x-1 text-chrome-500 hover:text-chrome-50"
                  href="https://www.linkedin.com/in/dhavaldubariya/"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-auto">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  target="_blank"
                  className="font-normal inline-flex space-x-1 text-chrome-500 hover:text-chrome-50"
                  href="https://github.com/dhavaldubariya"
                >
                  <GithubIcon 
                    height={20}
                    width={20}
                    color={"rgb(68 126 126 / var(--tw-text-opacity))"}
                  />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <h4 className="font-bold text-white">Location:</h4>
                <a className="font-normal inline-flex space-x-1 text-chrome-500 hover:text-chrome-50">
                  <span>Ahmedabad, Gujarat, India</span>
                </a>
              </li>
            </ul>
          </div>
        </footer>

      </div>
    </>
  );
}
