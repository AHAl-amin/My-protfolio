import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { Typewriter } from "react-simple-typewriter";

import { Link } from "react-router-dom";
import {  Roll,  } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="hero h-full  md:py-5 ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 p-10 mt-12">
        <div className="flex-1 ">
         
        <Roll>

          <img
            src="https://i.ibb.co/x2wkVkr/Whats-App-Image-2024-07-04-at-10-43-40-AM.jpg"
            className=" rounded-full shadow-3xl lg:h-[400px] lg:w-2/3 h-[300px] w-[300px] mx-auto  "
          />
        </Roll>
        
        </div>
        <div className="flex-1">
          <h1 className=" text-2xl font-bold">Hello!</h1>
          <h1 className="text-3xl font-bold text-orange-800">
            <Typewriter
              className="text-red-400"
              words={["I'm Al-amin "]}
              loop={Infinity}
              cursor
              cursorStyle="_ "
              typeSpeed={80}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </h1>

          <h1 className=" text-4xl font-bold mt-5">Web developer.</h1>
          <p className="py-6 font-semibold">
            Hello, I'm Alamin Hossain.I have been working in web development for
            2 years. I am a passionate and skilled web developer with expertise
            in HTML, CSS, Tailwind CSS, JavaScript, React, Express, and MongoDB.
            I enjoy creating efficient, visually appealing, and user-friendly
            web applications. My goal is to continuously improve my skills and
            contribute to exciting projects that make a difference.
          </p>
          <div className="text-[25px] flex gap-5 my-5 ">
            <a
              href="https://www.facebook.com/profile.php?id=100052719871178"
              target="_blank"
              className="bg-blue-500 hover:bg-sky-700 ... p-2 rounded"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/al-amin-hossain-339463319/"
              target="_blank"
              className="bg-blue-500 hover:bg-sky-700 ... p-2 rounded"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Alamin573190"
              target="_blank"
              className="bg-blue-500 hover:bg-sky-700 ... p-2 rounded"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              target="_blank"
              className="bg-blue-500 hover:bg-sky-700 ... p-2 rounded"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              className="bg-blue-500 hover:bg-sky-700 ... p-2 rounded"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="space-x-3">
            <button className="btn btn-outline btn-error">
              <Link
                className="text-black font-bold"
                to="https://drive.google.com/uc?id=1cdvMVwNazybc_6Y9Big0zKFTa5VgtSm-&export=download#mrlaboratory"
              >
                Download CV
              </Link>
            </button>
            <button className="btn btn-outline btn-error">
              <Link
                className="text-black font-bold"
                to="https://drive.google.com/u/0/uc?id=15n24ONvLTMkgMsMHkwqvaVWSQf8bkyTAP&export=download"
              >
                Download resume
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
