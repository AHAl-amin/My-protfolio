import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Blog Platform",
      description: "A modern blog website where users can publish and share articles on various topics. Features include responsive design, content management, and social sharing capabilities.",
      client: "https://github.com/Alamin573190/Assignment-11-client-site",
      server: "https://github.com/Alamin573190/Assignment-11-server-site",
      live: "https://assaignment-eleven.web.app/",
    },
    {
      title: "FitnessPal",
      description: "A comprehensive fitness tracking application with an extensive food database of over 11 million items. Users can log meals, track exercises, and monitor their fitness goals with ease.",
      client: "https://github.com/Alamin573190/Assignment-12-client-site",
      server: "https://github.com/Alamin573190/Assignment-12-server-site",
      live: "https://fitnesspal-assignment.web.app/",
    },
    {
      title: "Love to Travel",
      description: "A travel booking platform providing flights, hotels, car rentals, and vacation packages. Features include destination guides, travel tips, and user reviews to help plan the perfect trip.",
      client: "https://github.com/Alamin573190/Assignment-10-client-site",
      server: "https://github.com/Alamin573190/Assignment-10-server-site",
      live: "https://assaignment-ten-4a605.web.app/",
    },
  ];

  return (
    <section className="bg-gradient-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="section-title text-accent mb-16 md:text-2xl text-xl flex justify-center font-bold">Featured Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Zoom key={index}>
              <div className="card bg-secondary border border-accent border-opacity-20 card-hover h-full flex flex-col rounded-lg overflow-hidden">
                <div className="card-body flex-1 flex flex-col p-6">
                  <h2 className="card-title text-2xl text-accent font-bold mb-3">
                    {project.title}
                  </h2>
                  <p className="text-light text-sm leading-relaxed flex-1 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="card-actions flex flex-col gap-3 mt-auto">
                    <div className="flex gap-2 w-full">
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        to={project.client}
                        className="flex-1 btn-outline-custom text-center py-2 px-3 text-sm flex items-center justify-center gap-2"
                      >
                        <FaGithub size={16} />
                        Client
                      </Link>
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        to={project.server}
                        className="flex-1 btn-outline-custom text-center py-2 px-3 text-sm flex items-center justify-center gap-2"
                      >
                        <FaGithub size={16} />
                        Server
                      </Link>
                    </div>
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      to={project.live}
                      className="w-full btn-primary-custom text-center py-2 px-3 text-sm flex items-center justify-center gap-2"
                    >
                      <FaExternalLinkAlt size={16} />
                      Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;