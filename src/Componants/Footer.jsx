import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer bg-gray-700 text-neutral-content items-center p-4 py-10 rounded-t-[30px]">
        <aside className="grid-flow-col items-center">
          <img src="https://i.ibb.co/x2wkVkr/Whats-App-Image-2024-07-04-at-10-43-40-AM.jpg" alt=""className="w-[50px] h-[50px] rounded-full" />
          <p className="font-bold md:text-xl text-[12px]">Copyright © ${new Date().getFullYear()} - All right reserved by Al-amin</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <div className="text-3xl flex gap-4 mt-5 w-1/5 lg:mx-0 mx-auto">
              <a className="bg-sky-700 hover:bg-sky-400 ease-in duration-300 p-2 rounded-xl" href="https://www.facebook.com/profile.php?id=100052719871178" target="_blank"><FaFacebookF /></a>
              <a className="bg-sky-700 hover:bg-sky-400 ease-in duration-300 p-2 rounded-xl" href="https://github.com/Alamin573190" target="_blank"><FiGithub/></a>
              <a className="bg-sky-700 hover:bg-sky-400 ease-in duration-300 p-2 rounded-xl" href="https://www.linkedin.com/in/al-amin-hossain-339463319/" target="_blank"><FaLinkedinIn/></a>

             
            </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
