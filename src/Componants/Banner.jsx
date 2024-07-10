import { FaFacebook, FaInstagram,FaLinkedin, FaTwitter } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="hero h-full  md:py-5 ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 p-10 mt-12">
       <div className="flex-1 ">
       <img
          src="https://i.ibb.co/x2wkVkr/Whats-App-Image-2024-07-04-at-10-43-40-AM.jpg"
          className=" rounded-full shadow-3xl lg:h-[400px] lg:w-2/3 h-[300px] w-[300px] mx-auto  "
        />
       </div>
        <div className="flex-1">
            <h1 className=" text-2xl font-bold">Hello!</h1>
            <h1 className="text-3xl font-bold text-orange-800">
            <Typewriter className="text-red-400"
            words={["I'm Al-amin"]}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={70}
            delaySpeed={1000}
       
          />
              
               </h1>
          <h1 className=" text-4xl font-bold mt-5">
          Web developer.
            </h1>
          <p className="py-6 font-semibold">
          Hello, I'm Alamin Hossain.I have been working in web development for 2 years. I am a passionate and skilled web developer with expertise in HTML, CSS, Tailwind CSS, JavaScript, React, Express, and MongoDB. I enjoy creating efficient, visually appealing, and user-friendly web applications. My goal is to continuously improve my skills and contribute to exciting projects that make a difference.
          </p>
         <div className="text-[25px] flex gap-5 my-5 ">
         <a href="" className="bg-blue-500 hover:bg-sky-700 ... p-2 rounded"><FaFacebook/></a>  
         <a href="" className="bg-blue-500 hover:bg-sky-700 ... p-2 rounded"><FaLinkedin/></a> 
         <a href="" className="bg-blue-500 hover:bg-sky-700 ... p-2 rounded"><FaTwitter /></a>  
         <a href="" className="bg-blue-500 hover:bg-sky-700 ... p-2 rounded"><FaInstagram /></a>  
         </div>
          
          <button className="btn btn-outline btn-error  mr-5"><span className="text-black font-bold">Hire me!</span></button>
          <button className="btn btn-outline btn-error"><span className="text-black font-bold">view projects</span></button>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
