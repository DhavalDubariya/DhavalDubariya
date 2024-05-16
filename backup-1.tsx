/* eslint-disable @next/next/no-img-element */
'use client'
import { jobs, projects, skills } from "@/constants/data";
import Image from "next/image";
import React, { useState } from "react";
// import { LinkSquare02Icon } from '@hugeicons/react-pro';

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
                <div>Paras Dalsaniya</div>
                <div className="text-4xl whitespace-wrap grayscale">
                  <h2>Full Stack Developer</h2>
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
                    <div className="mt-0 flex items-baseline gap-3">
                      <div className="no-underline hover:underline text-white text-[22px]">
                          {job.company}
                      </div>
                        <span className="text-white text-sm">{job.time}</span>
                    </div>
                    {/* {job.technology.map((s) => (
                      <span key={s} className="text-[12px] tracking-wide rounded bg-chrome-800 font-mono text-theme-400 m-1 px-1.5 py-0.5">{s}</span>
                    ))} */}
                    <ul className="text-base">
                      {job.description.map((item, i) => (
                        <li key={i}>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
                    <div className="flex items-center	 gap-3">
                      <div className="no-underline hover:underline text-lg">
                        <span>{project.name}</span>
                      </div>
                      <div>
                        <a className="flex items-center	gap-1 grayscale no-underline hover:no-underline text-sm" target="_blank" href={project.github}>
                          Github
                          <span>
                            <LinkSquare02Icon
                              height={13}
                              width={13}
                              color={"#FFFFFF"}
                            />
                          </span>
                        </a>
                      </div>
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
                      {project.github && (
                        <div>
                          <a className="font-bold text-inherit hover:no-underline" target="_blank" href={project.github}>
                            <span>Github</span>
                          </a>
                        </div>
                      )}
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
                  href="https://twitter.com/joshuaanderton"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-5 h-auto">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  target="_blank"
                  className="font-normal inline-flex space-x-1 text-chrome-500 hover:text-chrome-50"
                  href="https://www.linkedin.com/in/joshuaanderton"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-auto">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <h4 className="font-bold text-white">Podcast:</h4>
                <a
                  target="_blank"
                  className="font-normal inline-flex space-x-1 text-chrome-500 hover:text-chrome-50"
                  href="https://www.gettingtoramen.com/"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-auto">
                    <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                    <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                  </svg>
                  <span>Getting To Ramen</span>
                </a>
              </li>
            </ul>
          </div>
        </footer>

      </div>
    </>
  );
}

const LinkSquare02Icon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M11.0988 3.00012C7.4498 3.00669 5.53898 3.09629 4.31783 4.31764C3 5.63568 3 7.75704 3 11.9997C3 16.2424 3 18.3638 4.31783 19.6818C5.63565 20.9999 7.75668 20.9999 11.9987 20.9999C16.2407 20.9999 18.3617 20.9999 19.6796 19.6818C20.9007 18.4605 20.9903 16.5493 20.9969 12.8998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.5561 3.49637L11.0488 13.0589M20.5561 3.49637C20.0622 3.00175 16.7345 3.04785 16.031 3.05786M20.5561 3.49637C21.0501 3.99098 21.0041 7.32297 20.9941 8.02738" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const LaptopProgrammingIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M20 14.5V6.5C20 4.61438 20 3.67157 19.4142 3.08579C18.8284 2.5 17.8856 2.5 16 2.5H8C6.11438 2.5 5.17157 2.5 4.58579 3.08579C4 3.67157 4 4.61438 4 6.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.49762 15.5154L4.01953 14.5H19.9518L20.5023 15.5154C21.9452 18.177 22.3046 19.5077 21.7561 20.5039C21.2077 21.5 19.7536 21.5 16.8454 21.5L7.15462 21.5C4.24642 21.5 2.79231 21.5 2.24387 20.5039C1.69543 19.5077 2.05474 18.177 3.49762 15.5154Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.5 7L16.4199 7.79289C16.8066 8.12623 17 8.29289 17 8.5C17 8.70711 16.8066 8.87377 16.4199 9.20711L15.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.5 7L7.58009 7.79289C7.19337 8.12623 7 8.29289 7 8.5C7 8.70711 7.19336 8.87377 7.58009 9.20711L8.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 6L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NewJobIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <path d="M11.0065 21H9.60546C6.02021 21 4.22759 21 3.11379 19.865C2 18.7301 2 16.9034 2 13.25C2 9.59661 2 7.76992 3.11379 6.63496C4.22759 5.5 6.02021 5.5 9.60546 5.5H13.4082C16.9934 5.5 18.7861 5.5 19.8999 6.63496C20.7568 7.50819 20.9544 8.7909 21 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17.111 13.2551C17.2956 13.085 17.3879 13 17.5 13C17.6121 13 17.7044 13.085 17.889 13.2551L18.6017 13.9117C18.6878 13.991 18.7308 14.0307 18.7843 14.0503C18.8378 14.07 18.8963 14.0677 19.0133 14.0631L19.9762 14.0253C20.2241 14.0155 20.3481 14.0107 20.4331 14.0821C20.5181 14.1535 20.5346 14.2765 20.5677 14.5224L20.7004 15.5077C20.7157 15.6216 20.7234 15.6785 20.7511 15.7271C20.7789 15.7757 20.824 15.8112 20.9143 15.8823L21.6898 16.4928C21.8817 16.6439 21.9777 16.7194 21.9967 16.8274C22.0157 16.9354 21.9513 17.0391 21.8225 17.2467L21.2965 18.0943C21.2363 18.1913 21.2063 18.2398 21.1967 18.2946C21.1871 18.3493 21.199 18.4052 21.2228 18.5168L21.4315 19.4952C21.4827 19.7356 21.5084 19.8558 21.4533 19.9513C21.3983 20.0467 21.2814 20.0848 21.0477 20.1609L20.122 20.4624C20.0117 20.4983 19.9565 20.5163 19.9134 20.5528C19.8703 20.5894 19.8436 20.6409 19.7902 20.7439L19.338 21.6154C19.2227 21.8375 19.1651 21.9485 19.0601 21.9868C18.9551 22.0251 18.8395 21.9772 18.6084 21.8813L17.72 21.5128C17.6114 21.4678 17.5572 21.4453 17.5 21.4453C17.4428 21.4453 17.3886 21.4678 17.28 21.5128L16.3916 21.8813C16.1605 21.9772 16.0449 22.0251 15.9399 21.9868C15.8349 21.9485 15.7773 21.8375 15.662 21.6154L15.2098 20.7439C15.1564 20.6409 15.1297 20.5894 15.0866 20.5528C15.0435 20.5163 14.9883 20.4983 14.878 20.4624L13.9523 20.1609C13.7186 20.0848 13.6017 20.0467 13.5467 19.9513C13.4916 19.8558 13.5173 19.7356 13.5685 19.4952L13.7772 18.5168C13.801 18.4052 13.8129 18.3493 13.8033 18.2946C13.7937 18.2398 13.7637 18.1913 13.7035 18.0943L13.1775 17.2467C13.0487 17.0391 12.9843 16.9354 13.0033 16.8274C13.0223 16.7194 13.1183 16.6439 13.3102 16.4928L14.0857 15.8823C14.176 15.8112 14.2211 15.7757 14.2489 15.7271C14.2766 15.6785 14.2843 15.6216 14.2996 15.5077L14.4323 14.5224C14.4654 14.2765 14.4819 14.1535 14.5669 14.0821C14.6519 14.0107 14.7759 14.0155 15.0238 14.0253L15.9867 14.0631C16.1037 14.0677 16.1622 14.07 16.2157 14.0503C16.2692 14.0307 16.3122 13.991 16.3983 13.9117L17.111 13.2551Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15.9998 5.5L15.9004 5.19094C15.4054 3.65089 15.1579 2.88087 14.5686 2.44043C13.9794 2 13.1967 2 11.6313 2H11.3682C9.8028 2 9.02011 2 8.43087 2.44043C7.84162 2.88087 7.59411 3.65089 7.0991 5.19094L6.99976 5.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
