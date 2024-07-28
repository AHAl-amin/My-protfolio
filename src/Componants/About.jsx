import {  FaFacebookF,FaLinkedinIn, FaPhone,} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

// import { useCallback } from "react";
// import Particles from "react-tsparticles";

// import { loadSlim } from "tsparticles-slim";

const About = () => {


 
  return (
    <div
      className="hero 
    md:p-14 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500"
    >
      <div>
        <h1 className="text-red-800 font-bold text-3xl text-center mb-5 pt-5 md:p-0">
          About me!
        </h1>
        <div className="hero-content flex-col gap-20 lg:flex-row">
          <div className="lg:w-1/3 w-full ">
            <img
              src="https://i.ibb.co/Z1bJ24x/programming.jpg"
              className="w-full h-[300px] rounded-lg drop-shadow-md hover:drop-shadow-xll"
            />
          </div>
          <div className="lg:w-2/3">
            <h1 className="text-2xl md:text-4xl font-bold mb-3">
              Hi! I'am Al-amin Hossain
            </h1>
            <h1 className="text-xl md:text-3xl font-bold text-green-400">
              Front End Web Developer.
            </h1>
            <p className="py-6">
              I am a junior web developer.I have been working in this field for
              2 years.I am a passionate and skilled web developer with expertise
              in HTML, CSS, Tailwind CSS, JavaScript, React, Express,Node.js and
              MongoDB. I enjoy creating efficient, visually appealing, and
              user-friendly web applications. My goal is to continuously improve
              my skills and contribute to exciting projects that make a
              difference.
            </p>
            <div className="space-y-2">
              <p>
                <span className="font-bold">Birthday :</span> 01 December,2004
              </p>
              <p>
                <span className="font-bold">Language :</span> Bangla,English
              </p>
              <p className="flex items-center gap-3">
                <span className="font-bold text-blue-300">
                  <FaPhone />
                </span>
                +8801919457711
                
              </p>

              <p className="flex items-center gap-3">
                <span className="font-bold text-blue-300">
                  <MdOutlineMail />
                </span>
                mdalaminhossain573190@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <span className="font-bold text-blue-300">
                  <FaLocationDot></FaLocationDot>
                </span>
                Fromgate,Dhaka
              </p>
            </div>
            <div className="text-3xl flex gap-4 mt-5 text- ">
              <a className="bg-sky-700 hover:bg-sky-400 ease-in duration-300 p-2 rounded-xl" href="https://www.facebook.com/profile.php?id=100052719871178" target="_blank"><FaFacebookF /></a>
              <a className="bg-sky-700 hover:bg-sky-400 ease-in duration-300 p-2 rounded-xl" href="https://github.com/Alamin573190" target="_blank"><FiGithub/></a>
              <a className="bg-sky-700 hover:bg-sky-400 ease-in duration-300 p-2 rounded-xl" href="https://www.linkedin.com/in/al-amin-hossain-339463319/" target="_blank"><FaLinkedinIn/></a>

             
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
