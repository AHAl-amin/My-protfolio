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
                  <h3 className="text-2xl font-bold text-accent mb-2">Diploma in Computer Engineering</h3>
                  <h4 className="text-light font-semibold text-lg mb-3">
                    Sherpur Polytechnic Institute
                  </h4>
                  <p className="text-light/80">
                    Passed Diploma in Computer Engineering in 2024 with a CGPA of 3.79. Focused on practical computer engineering coursework and strong technical foundations.
                  </p>
                </div>

                <div className="bg-secondary border-l-4 border-accent p-6 rounded-lg card-hover">
                  <h3 className="text-2xl font-bold text-accent mb-2">B.Sc. in Computer Science & Engineering</h3>
                  <h4 className="text-light font-semibold text-lg mb-3">
                    Northern University Bangladesh
                  </h4>
                  <p className="text-light/80">
                    Currently studying CSE at Northern University Bangladesh. Continuing academic progress while building real-world Software development experience.
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
                  <h3 className="text-2xl font-bold text-accent mb-2">Jr. Frontend Developer</h3>
                  <h4 className="text-light font-semibold text-lg mb-3">
                    JVAI
                  </h4>
                  <div className="text-light/80 space-y-2">
                    <p>• Working continuously at JVAI since January 21, 2025.</p>
                    <p>• Developing user-friendly frontend interfaces using modern web technologies.</p>
                    <p>• Collaborating with teams to deliver responsive and accessible applications.</p>
                    <p>• Maintaining and improving existing frontend codebases for better performance.</p>
                  </div>
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
