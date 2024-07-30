import { Zoom } from "react-awesome-reveal";
import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <h2 className="font-bold text-5xl text-center text-orange-700">Skils</h2>
      
      <div className="px-5 py-14 grid grid-cols-1 md:grid-cols-4 gap-6">
      <Zoom>
        
        <div className="card bg-sky-900  shadow-4xl">
          <figure className="px-10 pt-10">
            
            <p className="text-6xl text-orange-400"><FaHtml5/></p>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-white font-bold text-4xl">HTML</h2>
            <div className="card-actions">
              
            </div>
          </div>
        </div>
        </Zoom>
        <Zoom>
        
        <div className="card bg-sky-900 shadow-4xl">
          <figure className="px-10 pt-10">
            
            <p className="text-6xl text-blue-400"><FaCss3Alt/></p>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-white font-bold text-4xl">CSS</h2>
            <div className="card-actions">
              
            </div>
          </div>
        </div>
        </Zoom>
        <Zoom>
        
        <div className="card bg-sky-900 shadow-4xl">
          <figure className="px-10 pt-10">
            
            <p className="text-6xl text-green-400"><RiTailwindCssFill/></p>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-white font-bold text-4xl">Tailwind CSS</h2>
            <div className="card-actions">
              
            </div>
          </div>
        </div>
      </Zoom>
      <Zoom>
        
        <div className="card bg-sky-900 shadow-4xl">
          <figure className="px-10 pt-10">
            
            <p className="text-6xl text-yellow-400"><IoLogoJavascript/></p>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-white font-bold text-4xl">Java script</h2>
            <div className="card-actions">
              
            </div>
          </div>
        </div>
        </Zoom>
        <Zoom>
        
        <div className="card bg-sky-900 shadow-4xl">
          <figure className="px-10 pt-10">
            
            <p className="text-6xl text-blue-400"><FaReact/></p>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-white font-bold text-4xl">Rect</h2>
            <div className="card-actions">
              
            </div>
          </div>
        </div>
      </Zoom>
      <Zoom>
        
        <div className="card bg-sky-900 shadow-4xl">
          <figure className="px-10 pt-10">
            
            <p className="text-6xl text-pink-400">
            <SiExpress/></p>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-white font-bold text-4xl">Express</h2>
            <div className="card-actions">
              
            </div>
          </div>
        </div>
        </Zoom>
        <Zoom>
        
        <div className="card bg-sky-900 shadow-4xl">
          <figure className="px-10 pt-10">
            
            <p className="text-6xl text-blue-200">
            <FaNode/></p>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-white font-bold text-4xl">Node.js</h2>
            <div className="card-actions">
              
            </div>
          </div>
        </div>
        </Zoom>
        <Zoom>
        
        <div className="card bg-sky-900 shadow-4xl">
          <figure className="px-10 pt-10">
            
            <p className="text-6xl text-green-400">
            <SiMongodb/>
            </p>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-white font-bold text-4xl">MongoDB</h2>
            <div className="card-actions">
              
            </div>
          </div>
        </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Skills;
