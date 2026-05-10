import { Zoom } from "react-awesome-reveal";
import { FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-400" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-400" },
    { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-cyan-400" },
    { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Express.js", icon: SiExpress, color: "text-light" },
    { name: "Node.js", icon: FaNode, color: "text-green-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  ];

  return (
    <section className="bg-gradient-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-accent mb-16 md:text-2xl text-xl flex justify-center font-bold">My Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Zoom key={index}>
              <div className="card bg-secondary border border-accent border-opacity-20 card-hover h-full flex flex-col items-center justify-center p-6 rounded-lg">
                <figure className="pb-6">
                  <skill.icon className={`text-6xl ${skill.color}`} />
                </figure>
                <div className="card-body items-center text-center p-0">
                  <h2 className="text-light font-bold text-xl">{skill.name}</h2>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
