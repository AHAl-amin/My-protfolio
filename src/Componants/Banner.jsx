import img1 from '../assets/photo.png'
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
    <div className="hero min-h-screen bg-gradient-primary pt-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 px-4 md:px-8 max-w-6xl">
        <div className="flex-1">
          <Roll>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accentDark rounded-full opacity-75 blur-2xl"></div>
              <img
                src={img1}
                alt="Al-amin"
                className="relative rounded-full border-4 border-accent shadow-2xl lg:h-[450px] lg:w-[450px] h-[300px] w-[300px] mx-auto object-cover"
              />
            </div>
          </Roll>
        </div>
        <div className="flex-1 text-light">
          <h1 className="text-xl font-medium text-accent mb-2">Hello! 👋</h1>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <Typewriter
              words={["I'm Al-amin", "I'm a Developer", "I'm Creative"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <h3 className="text-3xl font-semibold text-accent mb-6">Full Stack Web Developer</h3>
          
          <p className="text-light text-lg leading-relaxed mb-8 max-w-2xl">
            I'm Alamin Hossain, a passionate full-stack web developer with 2+ years of experience. 
            I specialize in building efficient, scalable, and user-friendly web applications using modern technologies.
            My expertise includes HTML, CSS, Tailwind CSS, JavaScript, React, Express, and MongoDB.
          </p>

          <div className="flex gap-4 mb-8 text-2xl">
            <a
              href="https://www.facebook.com/profile.php?id=100052719871178"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-secondary rounded-lg text-accent hover:bg-accent hover:text-secondary transition transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/al-amin-hossain-339463319/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-secondary rounded-lg text-accent hover:bg-accent hover:text-secondary transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/AHAl-amin"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-secondary rounded-lg text-accent hover:bg-accent hover:text-secondary transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
           
            <a
              href="https://www.instagram.com/ah_al_amin_hossain?igsh=dmduaW5zZThkYmJk"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-secondary rounded-lg text-accent hover:bg-accent hover:text-secondary transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="btn-primary-custom">
              <a
                href="https://drive.google.com/uc?id=1LAB5w60nXZKVsZbbexGcmY_jbYOxGqtM&export=download"
                download
              >
                Download CV
              </a>
            </button>
            <button className="btn-outline-custom">
              <Link to="/contact">
                Get in Touch
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
