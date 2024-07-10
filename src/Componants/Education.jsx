import { FaShoppingBag } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";

const Education = () => {
  return (
    <div className="flex gap-10 lg:px-14 py-10 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="flex-1">
        <div className="space-y-2">
          <h1 className="font-bold text-4xl text-white flex items-center mr-2">
            <span className="text-5xl ">
              <PiStudent />
            </span>{" "}
            Education
          </h1>
          <h1 className="text-3xl font-bold text-green-400">SSC</h1>
          <h2 className="font-bold text-2xl">
            Kurua High School,Shreebordi,Sherpur
          </h2>
          <p className="text-gray-300 font-semibold">
            passed SSC examination from kurua high school in 2020. Studies in
            this institute from 2014 to 2020.
          </p>
        </div>
        <div className="space-y-2 mt-6">
                
                
                <h1 className="text-3xl font-bold text-green-400">Diploma-In-Engineering</h1>
                <h2 className="font-bold text-2xl">Sherpur Polytechnic Institute</h2>
                <p className="text-gray-300 font-semibold">I am a student of the Computer Department at Sherpur Polytechnic Institute.Now 8th Semester Running, I accepted Graduation in last time 2024.</p>
                </div>
      </div>
      <div className="flex-1">
      <div className="flex-1">
        <div className="space-y-2">
          <h1 className="font-bold text-4xl text-white flex items-center mr-2">
            <span className="text-5xl ">
            <FaShoppingBag/>
            </span>{" "}
            Experience
          </h1>
          <h1 className="text-3xl font-bold text-green-400">Jr. Web Development</h1>
          <h2 className="font-bold text-2xl">
            Kurua High School,Shreebordi,Sherpur
          </h2>
          <p className="text-gray-300 font-semibold">
          Self-Employed / Freelance <br />

           Developed web applications using MongoDB, Express.js, React, Node.js, and Next.js. Built responsive UIs with React and Tailwind CSS. Created RESTful APIs and managed databases. Collaborated with clients, solved complex problems, and stayed updated with industry trends.
          </p>
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default Education;
