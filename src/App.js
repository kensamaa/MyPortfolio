/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import "./App.css";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
  AiFillEnvironment,
  AiFillPhone,
} from "react-icons/ai";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <main className="px-8 md:px-20 lg:px-40 dark:bg-black">
      {/**navv baar */}
      <nav className="dark:bg-gray-700 fixed top-0 left-0 w-full bg-white shadow-sm px-8 md:px-20 lg:px-40 py-4 flex justify-between items-center z-50">
        <h1 className="font-burtons text-lg ">
          <p className="dark:text-white">KENSAMA</p>
        </h1>
        <ul className="flex items-center">
          <li>
            <button onClick={handleThemeSwitch}>
              {" "}
              <BsFillMoonStarsFill />
            </button>
          </li>
          <a
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 bg-blue-300 rounded-md ml-8 text-white"
            href="#"
          >
            Resume
          </a>
        </ul>
      </nav>
      {/** end navv baar */}
      <section
        id="home"
        className="min-h-screen text-center mt-4 flex flex-col justify-center "
      >
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
          <img src="/avatar.png" layout="fill" objectFit="cover" />
        </div>
        <h1 className="text-3xl md:text-5xl font-medium text-teal-500">
          Amine Abouothmane
        </h1>
        <h3 className="text-xl md:text-2xl dark:text-white">
          Sotware & Cloud Engineer
        </h3>
        <p className="text-md py-1 text-gray-800 md:text-xl">
          Enthusiastic and motivated self-learning about information technology.
          Focused on cloud computing, devops, and micro services development.
          Now I am looking for more experience in my field.{" "}
        </p>
        <div className="text-5xl py-4 flex justify-center gap-16 text-gray-600">
          <a href="https://www.linkedin.com/in/amine-abouothmane-b8508b156/">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/kensamaa">
            {" "}
            <AiFillGithub />
          </a>
        </div>
      </section>

      <section id="service" className="">
        <h1 className="text-xl font-medium dark:text-white">
          Services I Offer
        </h1>
        <p className="mt-1 text-md dark:text-white">
          I have experience in building an application and creating microservice
          architecture to provide business and consumer solutions. I offer a
          wide of service, including Frontend & Backend Development, Cloud & IT
          Solutions Architect, DevOps Architect
        </p>
        <br />
        <div className="mt-4 flex flex-col md:flex-row gap-8 ">
          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1 dark:shadow-white">
            <img src="software.png" className="w-48" alt="gambar" />
            <h2 className="text-xl dark:text-white">Software Development</h2>
            <p className="text-gray-500 dark:text-white">
              I can help you solve a problem, build a product or grow existing
              project.
            </p>
            <p className="text-xl dark:text-white">Tools I Use</p>
            <ul>
              <li className="dark:text-white">Dotnet Core</li>
              <li className="dark:text-white">Node JS (Express)</li>
              <li className="dark:text-white">Reactjs</li>
              <li className="dark:text-white">Python </li>
            </ul>
          </div>

          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1 dark:shadow-white">
            <img src="cloud.png" className="w-48" alt="gambar" />
            <h2 className="text-xl dark:text-white">
              Cloud & IT Solutions Architect
            </h2>
            <p className="text-gray-500 dark:text-white">
              I can help you solve a problem, build a product or grow existing
              project.
            </p>
            <p className="text-xl dark:text-white">Tools I Use</p>
            <ul>
              <li>Azure</li>

              <li>Docker & Docker compose</li>
            </ul>
          </div>

          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1 dark:shadow-white">
            <img src="ops.png" className="w-48" alt="gambar" />
            <h2 className="text-xl dark:text-white">DevOps Architect</h2>
            <p className="text-gray-500 dark:text-white">
              I can help you solve a problem, build a product or grow existing
              project.
            </p>
            <p className="text-xl dark:text-white">Tools I Use</p>
            <ul>
              <li>Gitlab</li>
              <li>Azure devops</li>
              <li></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mt-10">
        <h1 className="text-xl font-medium dark:text-white">Portfolio</h1>
        <p className="mt-1 text-md dark:text-white">
          Here are some projects that I have managed.
        </p>
      </section>

      <section id="license" className="mt-10">
        <h1 className="text-xl font-medium dark:text-white">Experiences</h1>
        <p className="mt-1 text-md dark:text-white"></p>

        <div className="flex flex-col md:flex-row gap-8 mt-4">
          <div className="w-full md:w-2/6 shadow-md rounded dark:shadow-white">
            <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
              <img
                src="https://source.unsplash.com/random"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-medium dark:text-white">
                developper internship
              </h1>
              <p className="dark:text-white">intern at royal air maroc</p>
              <p className="text-sm text-gray-500 dark:text-white">May 2023</p>
            </div>
          </div>

          <div className="w-full md:w-2/6 shadow-md rounded dark:shadow-white">
            <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
              <img
                src="https://source.unsplash.com/random"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-medium dark:text-white">
                Software Engineer intern
              </h1>
              <p className="dark:text-white">internship at Capgemini</p>
              <p className="text-sm text-gray-500 dark:text-white">May 2023</p>
            </div>
          </div>

          <div className="w-full md:w-2/6 shadow-md rounded dark:shadow-white">
            <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
              <img
                src="https://source.unsplash.com/random"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-medium dark:text-white">
                Dotnet Software Engineer
              </h1>
              <p className="dark:text-white">Capgemini</p>
              <p className="text-sm text-gray-500 dark:text-white">May 2023</p>
            </div>
          </div>
          <div className="w-full md:w-2/6 shadow-md rounded dark:shadow-white">
            <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
              <img
                src="https://source.unsplash.com/random"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-medium dark:text-white">
                Dasar Pemrograman Javascript
              </h1>
              <p className="dark:text-white">Dicoding Indonesia</p>
              <p className="text-sm text-gray-500 dark:text-white">May 2023</p>
            </div>
          </div>
          <div className="w-full md:w-2/6 shadow-md rounded dark:shadow-white">
            <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
              <img
                src="https://source.unsplash.com/random"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-medium dark:text-white">
                Dasar Pemrograman Javascript
              </h1>
              <p className="dark:text-white">Dicoding Indonesia</p>
              <p className="text-sm text-gray-500 dark:text-white">May 2023</p>
            </div>
          </div>
        </div>
      </section>

      <section id="honor" className="mt-10">
        <h1 className="text-xl font-medium dark:text-white">
          Honors & Rewards
        </h1>
        <p className="mt-1 text-md dark:text-white">
          Here are some of the honor and rewards I have.
        </p>

        <div className="flex rounded shadow-md flex-col md:flex-row px-2 py-4">
          <div className="pl-4 mt-2 md:w-3/6">
            <p className="font-bold dark:text-white">
              Top 10 SELEKNAS Asean Skill Competition 2022
            </p>
            <p className="text-gray-500 dark:text-white">
              Issued by KEMENAKER RI
            </p>
            <ul className="list-disc pl-4 dark:text-white">
              <li>Linux Server</li>
              <li>Windows Server</li>
              <li>Linux Routing</li>
              <li>Cisco Troubleshooting</li>
              <li>Cisco Network Analysis</li>
              <li>Network and System Programmabillity</li>
              <li>Containerized Service</li>
            </ul>
          </div>
          <div className="pl-4 mt-2 md:w-3/6">
            <p className="font-bold dark:text-white">
              3rd Place Winner of IT Network System Administration - LKS Jawa
              Tengah 2022
            </p>
            <p className="text-gray-500 dark:text-white">
              Issued by KEMENDIKBUD RI
            </p>
            <ul className="list-disc pl-4 dark:text-white">
              <li>Linux Server</li>
              <li>Windows Server</li>
              <li>Cisco Configuration</li>
              <li>Cisco Troubleshooting</li>
              <li>Network and System Programmabillity</li>
              <li>Containerized Service</li>
            </ul>
          </div>
          <div className="pl-4 mt-2 md:w-3/6 dark:text-white">
            <p className="font-bold dark:text-white">
              1st Place winner of IT Network System Administration - LKS Kab.
              Tegal 2022
            </p>
            <p className="text-gray-500 dark:text-white">
              Issued by KEMENDIKBUD RI
            </p>
            <ul className="list-disc px-4 dark:text-white">
              <li>Linux Server</li>
              <li>Cisco Configuration</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="footer"
        className="mt-5 rounded bg-black py-8 px-8 dark:bg-white"
      >
        <div className="text-white md:text-center dark:text-black">
          <h1 className="font-medium text-lg ">Contact Me</h1>
          <p>Wanna talk anything?</p>

          <ul className="md:flex justify-center gap-4">
            <li className="flex items-center gap-2">
              <AiFillMail />
              <p>amineab203@gmail.com</p>
            </li>
            <li className="flex items-center gap-2">
              <AiFillEnvironment />
              <p>morocco casablanca</p>
            </li>
            <li className="flex items-center gap-2">
              <AiFillPhone />
              <p>+212640147304</p>
            </li>
          </ul>

          <div className="flex text-xl text-white gap-4 mt-2 md:justify-center dark:text-black">
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillInstagram />
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 dark:text-black" />

          <p className="text-center text-sm text-gray-300 sm:text-center dark:text-black">
            © 2023 amine abouotmane . All Rights Reserved.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
