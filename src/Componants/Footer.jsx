import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-accent border-opacity-20 text-light py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold">
              <span className="text-accent">Al</span>amin.
            </h3>
            <p className="text-light/70 mt-2">Full Stack Web Developer</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2 text-center text-light/80">
              <li><a href="#home" className="hover:text-accent transition">Home</a></li>
              <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold text-accent mb-4">Follow Me</h4>
            <div className="flex gap-4 text-2xl">
              <a 
                className="p-2 bg-accent text-secondary rounded-lg hover:bg-accentDark transition transform hover:scale-110"
                href="https://www.facebook.com/profile.php?id=100052719871178"
                target="_blank"
                rel="noreferrer"
                title="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                className="p-2 bg-accent text-secondary rounded-lg hover:bg-accentDark transition transform hover:scale-110"
                href="https://github.com/AHAl-amin"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                className="p-2 bg-accent text-secondary rounded-lg hover:bg-accentDark transition transform hover:scale-110"
                href="https://www.linkedin.com/in/al-amin-hossain-339463319/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-light/70 text-sm">
            <p>Copyright © {currentYear} - All rights reserved by Al-amin Hossain</p>
            <p className="mt-4 md:mt-0">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
