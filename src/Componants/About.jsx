import { Zoom } from "react-awesome-reveal";
import { FaFacebookF, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const About = () => {
  return (
    <section className="bg-gradient-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="section-title text-accent md:text-2xl text-xl flex justify-center font-bold mb-5">About Me</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Zoom>
              <img
                src="https://i.ibb.co/Z1bJ24x/programming.jpg"
                alt="Programming"
                className="w-full h-[400px] rounded-lg shadow-2xl border-2 border-accent object-cover card-hover"
              />
            </Zoom>
          </div>
          <div className="text-light">
            <Zoom>
              <h2 className="text-4xl md:text-5xl font-bold mb-3">
                Hi! I'm Al-amin Hossain
              </h2>
            </Zoom>
            <Zoom>
              <p className="text-2xl font-semibold text-accent mb-6">
                Full Stack Web Developer
              </p>
            </Zoom>
            <Zoom>
              <p className="text-lg leading-relaxed mb-8 text-light/90">
                I'm a passionate full-stack web developer with 2+ years of experience. 
                I specialize in creating efficient, scalable, and user-friendly web applications 
                using modern technologies like React, Node.js, and MongoDB. I enjoy solving complex 
                problems and delivering high-quality solutions that exceed expectations.
              </p>
            </Zoom>
            
            <div className="space-y-4 mb-8">
              <Zoom>
                <div className="flex items-center gap-3 text-light">
                  <span className="font-semibold min-w-32">Birthday:</span>
                  <span>December 1, 2004</span>
                </div>
              </Zoom>
              <Zoom>
                <div className="flex items-center gap-3 text-light">
                  <FaPhone className="text-accent text-xl" />
                  <span>+880 1919 457 711</span>
                </div>
              </Zoom>
              <Zoom>
                <div className="flex items-center gap-3 text-light">
                  <MdOutlineMail className="text-accent text-xl" />
                  <span>mdalaminhossain573190@gmail.com</span>
                </div>
              </Zoom>
              <Zoom>
                <div className="flex items-center gap-3 text-light">
                  <FaLocationDot className="text-accent text-xl" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </Zoom>
            </div>

            <Zoom>
              <div className="flex gap-4">
                <a
                  className="p-3 bg-secondary rounded-lg text-accent hover:bg-accent hover:text-secondary transition transform hover:scale-110"
                  href="https://www.facebook.com/profile.php?id=100052719871178"
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  className="p-3 bg-secondary rounded-lg text-accent hover:bg-accent hover:text-secondary transition transform hover:scale-110"
                  href="https://github.com/AHAl-amin"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  className="p-3 bg-secondary rounded-lg text-accent hover:bg-accent hover:text-secondary transition transform hover:scale-110"
                  href="https://www.linkedin.com/in/al-amin-hossain-339463319/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
