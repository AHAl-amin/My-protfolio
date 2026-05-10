import { Link, NavLink } from "react-router-dom"

const Navber = () => {
    const navOptions=<>
    <li><NavLink to="/" className={({ isActive }) => isActive ? "!text-accent !border-b-2 !border-accent font-semibold" : "text-light hover:text-accent transition"}>Home</NavLink></li>
    <li><NavLink to="/about" className={({ isActive }) => isActive ? "!text-accent !border-b-2 !border-accent font-semibold" : "text-light hover:text-accent transition"}>About</NavLink></li>
    <li><NavLink to="/education" className={({ isActive }) => isActive ? "!text-accent !border-b-2 !border-accent font-semibold" : "text-light hover:text-accent transition"}>Education</NavLink></li>
    <li><NavLink to="/skils" className={({ isActive }) => isActive ? "!text-accent !border-b-2 !border-accent font-semibold" : "text-light hover:text-accent transition"}>Skills</NavLink></li>
    <li><NavLink to="/service" className={({ isActive }) => isActive ? "!text-accent !border-b-2 !border-accent font-semibold" : "text-light hover:text-accent transition"}>Services</NavLink></li>
    <li><NavLink to="/projects" className={({ isActive }) => isActive ? "!text-accent !border-b-2 !border-accent font-semibold" : "text-light hover:text-accent transition"}>Projects</NavLink></li>
    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "!text-accent !border-b-2 !border-accent font-semibold" : "text-light hover:text-accent transition"}>Contact</NavLink></li>
    </>
  return (
    <div className="navbar fixed bg-secondary bg-opacity-95 backdrop-blur-md z-50 border-b border-accent border-opacity-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-secondary rounded-lg z-[1] mt-3 w-52 p-2 shadow-lg border border-accent border-opacity-20"
          >
           {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl font-bold text-light hover:bg-transparent">
          <span className="text-accent text-3xl mr-1">Al</span>amin.
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-sm font-medium text-light">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/contact" className="btn bg-gradient-to-r from-accent to-accentDark border-none text-white font-semibold hover:shadow-lg hover:shadow-accent/50">
          Hire Me!
        </Link>
      </div>
    </div>
  );
};

export default Navber;
