import { Fade } from "react-awesome-reveal";

const Service = () => {
  return (
    <div>
      <h2 className="font-bold text-4xl text-center text-orange-800">
        My Service
      </h2>
      <div className="flex lg:flex-row flex-col gap-6 py-10 px-5 text-white">
        <Fade direction="left">

        <div className="card bg-sky-900 shadow-xl flex-1 h-full">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/ZcF7fCL/modern-web-design-concept-with-flat-style-23-2147933488.jpg"
              alt="Shoes"
              className="rounded-xl w-[250px] h-[270px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Web Design</h2>
            <p className="text-semibold">Web design is the process of creating and organizing the visual and functional elements of a website. It encompasses various aspects, including layout, color schemes, typography, graphics, and user interface design.</p>
           
          </div>
        </div>
        </Fade>
        <Fade direction="down">
          
        <div className="card bg-sky-900 shadow-xl flex-1 h-full">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/zxKgn6L/web-design-concept-with-flat-style-23-2147854683.jpg"
              alt="Shoes"
              className="rounded-xl w-[250px] h-[270px]"
            />
          </figure>
          <div className="card-body  items-center text-center">
            <h2 className="card-title">Web Development</h2>
            <p className="text-semibold">Web development refers to the process of creating and maintaining websites and web applications. It involves a combination of coding, designing, and managing databases to ensure that websites function properly and provide a seamless user experience.</p>
           
          </div>
        </div>
          </Fade>
          <Fade direction="right">
          
        <div className="card bg-sky-900 shadow-xl flex-1 h-full">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/cwXPVRW/data-transfer-databases-78370-6681.jpg"
              alt="Shoes"
              className="rounded-xl w-[250px] h-[270px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Database</h2>
            <p className="text-semibold">A database is an organized collection of structured information, or data, typically stored electronically in a computer system. Databases are used to store, manage, and retrieve data efficiently. </p>
           
          </div>
        </div>
          </Fade>
      </div>
    </div>
  );
};

export default Service;
