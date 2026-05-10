import { Fade } from "react-awesome-reveal";
import { FaCode, FaPalette, FaDatabase } from "react-icons/fa";

const Service = () => {
  const services = [
    {
      icon: FaPalette,
      title: "Web Design",
      description: "Beautiful and modern website designs that captivate your audience. I create visually stunning interfaces with user-centered design principles, ensuring optimal user experience and aesthetic appeal.",
      image: "https://i.ibb.co/ZcF7fCL/modern-web-design-concept-with-flat-style-23-2147933488.jpg",
    },
    {
      icon: FaCode,
      title: "Web Development",
      description: "Full-stack web development services using modern technologies. From frontend to backend, I build scalable and robust web applications that perform efficiently and meet your business requirements.",
      image: "https://i.ibb.co/zxKgn6L/web-design-concept-with-flat-style-23-2147854683.jpg",
    },
    {
      icon: FaDatabase,
      title: "Database Management",
      description: "Expert database design and management. I create efficient database structures using MongoDB and other technologies, ensuring data integrity, security, and optimal performance for your applications.",
      image: "https://i.ibb.co/cwXPVRW/data-transfer-databases-78370-6681.jpg",
    },
  ];

  return (
    <section className="bg-gradient-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-accent mb-16 md:text-2xl text-xl flex justify-center font-bold">My Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Fade key={index} direction={index % 2 === 0 ? "left" : "right"}>
              <div className="card bg-secondary border border-accent border-opacity-20 card-hover h-full flex flex-col rounded-lg overflow-hidden">
                <figure className="px-6 pt-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body flex-1 flex flex-col p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="text-3xl text-accent" />
                    <h2 className="card-title text-2xl text-accent">{service.title}</h2>
                  </div>
                  <p className="text-light text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
