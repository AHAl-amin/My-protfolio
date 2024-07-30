import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-orange-800 text-center">
        Projects
      </h1>
      <div className="flex md:p-10 p-5 lg:flex-row flex-col gap-6">
        <div className="card bg-sky-700 text-white w-full shadow-xl">
          <Zoom>

          <div className="card-body items-center text-center h-full">
            <h2 className="card-title text-3xl font-bold">Blog</h2>
            <p className="text-semibold text-gray-300 pb-6">
              A blog website is an online platform where individuals or groups
              of people regularly publish content in the form of articles or
              posts. Blogs can cover a wide range of topics, from personal
              experiences and opinions to professional advice and industry
              insights.Share information, opinions, and experiences. Educate
              readers on specific topics.
            </p>
            <div className="card-actions gap-4 mt-5 flex justify-center  ">
              <Link target="_blank" to="https://github.com/Alamin573190/Assignment-11-client-site" className="btn bg-orange-300">
                Client site
              </Link>
              <Link target="_blank" to="https://github.com/Alamin573190/Assignment-11-server-site" className="btn bg-orange-300">Server site</Link> <br /> 

              <Link target="_blank" to="https://assaignment-eleven.web.app/" className="btn bg-orange-300 md:ml-[-18px] lg:ml-0 ">Live   link</Link>
            </div>
          </div>
          </Zoom>
        </div>
        <div className="card  bg-sky-700 text-white w-full  shadow-xl ">
          <Zoom>

          <div className="card-body items-center text-center space-y-3 h-full">
            <h2 className="card-title text-3xl font-bold">FitnessPal</h2>
            <p className="text-semibold text-gray-300 pb-12 ">
              FitnessPal boasts an extensive food database with over 11 million
              items, including restaurant meals and branded foods, making it
              easier to log meals accurately.The app’s intuitive design
              simplifies the process of logging food and exercise, making it
              accessible to users of all experience levels.
            </p>
            <div className="card-actions gap-4  flex justify-center ">
              <Link target="_blank" to="https://github.com/Alamin573190/Assignment-12-client-site" className="btn bg-orange-300">
                Client site
              </Link>
              <Link target="_blank" to="https://github.com/Alamin573190/Assignment-12-server-site" className="btn bg-orange-300">Server site</Link><br />

              <Link target="_blank" to="https://fitnesspal-assignment.web.app/" className="btn bg-orange-300 md:ml-[-18px] lg:ml-0  ">Live link</Link>
            </div>
          </div>
          </Zoom>
        </div>
        <div className="card  bg-sky-700 text-white w-full  shadow-xl">
           <Zoom>
            
          <div className="card-body items-center text-center h-full">
            <h2 className="card-title text-3xl font-bold">Love to Travel</h2>
            <p className="text-semibold text-gray-300">
            A travel website serves as an online platform that provides information, services, and resources related to travel. These websites cater to various aspects of travel, including booking flights and accommodations, offering travel guides and tips, and showcasing destinations through articles, photos, and videos.Allows users to search for flights, hotels, car rentals, and vacation packages.
            
            </p>
            <div className="card-actions gap-4 mt-5 flex justify-center  ">
              <Link target="_blank" to="https://github.com/Alamin573190/Assignment-10-client-site" className="btn bg-orange-300">
                Client site
              </Link>
              <Link target="_blank" to="https://github.com/Alamin573190/Assignment-10-server-site" className="btn bg-orange-300">Server site</Link><br />

              <Link target="_blank" to="https://assaignment-ten-4a605.web.app/" className="btn bg-orange-300 md:ml-[-18px] lg:ml-0  ">Live link</Link>
            </div>
          </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Projects;
