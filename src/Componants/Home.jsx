import About from "./About";
import Banner from "./Banner";
import Education from "./Education";




const Home = () => {
    return (
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <Banner></Banner>
            <About></About>
            <Education></Education>
            
          
            
        </div>
    );
};

export default Home;