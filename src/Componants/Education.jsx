import { Fade } from "react-awesome-reveal";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Education = () => {
  return (
    <section className="bg-gradient-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="section-title text-accent mb-16 md:text-2xl text-xl flex justify-center font-bold">Education & Experience</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <Fade direction="down">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-accent flex items-center gap-3 mb-8">
                  <FaGraduationCap size={32} /> Education
                </h2>

                {/* SSC */}
                <div className="bg-secondary border-l-4 border-accent p-6 rounded-lg card-hover">
                  <h3 className="text-2xl font-bold text-accent mb-2">SSC</h3>
                  <h4 className="text-light font-semibold text-lg mb-3">
                    Kurua High School, Sherpur
                  </h4>
                  <p className="text-light/80">
                    Passed SSC examination in 2020. Studied at this institute from 2014 to 2020 with focus on science stream.
                  </p>
                </div>

                {/* Diploma */}
                <div className="bg-secondary border-l-4 border-accent p-6 rounded-lg card-hover">
                  <h3 className="text-2xl font-bold text-accent mb-2">Diploma in Engineering</h3>
                  <h4 className="text-light font-semibold text-lg mb-3">
                    Sherpur Polytechnic Institute
                  </h4>
                  <p className="text-light/80">
                    Computer Science & Technology student. Currently in 8th semester with expected graduation in 2024. Focus on practical engineering skills and modern technologies.
                  </p>
                </div>
              </div>
            </Fade>
          </div>

          {/* Experience */}
          <div>
            <Fade direction="down">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-accent flex items-center gap-3 mb-8">
                  <FaBriefcase size={32} /> Experience
                </h2>

                <div className="bg-secondary border-l-4 border-accent p-6 rounded-lg card-hover">
                  <h3 className="text-2xl font-bold text-accent mb-2">Jr. Full Stack Web Developer</h3>
                  <h4 className="text-light font-semibold text-lg mb-3">
                    Self-Employed / Freelance
                  </h4>
                  <div className="text-light/80 space-y-2">
                    <p>• Developed web applications using MERN stack (MongoDB, Express, React, Node.js)</p>
                    <p>• Built responsive and interactive user interfaces with React and Tailwind CSS</p>
                    <p>• Created RESTful APIs and managed databases</p>
                    <p>• Collaborated with clients and solved complex problems</p>
                    <p>• Stayed updated with industry trends and best practices</p>
                  </div>
                </div>

                <div className="bg-secondary border-l-4 border-accent p-6 rounded-lg card-hover">
                  <h3 className="text-2xl font-bold text-accent mb-2">Technical Skills</h3>
                  <p className="text-light/80">
                    Frontend: React, JavaScript, HTML, CSS, Tailwind CSS<br />
                    Backend: Node.js, Express.js, MongoDB, REST APIs<br />
                    Tools: Git, VS Code, Figma
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
