import main from "../assets/images/main.svg";
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from "react-router-dom";
import { Logo } from '../components';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
       <Logo/>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            My Career <span>Tracker</span> app
          </h1>
          <p>
          Welcome to Career Tracker, where your professional journey takes flight. 
          Whether you are aiming for new skills, dream jobs, or career-defining milestones, we make progress seamless and inspiring. 
          Discover personalized goals, expert insights, and effortless tracking—all crafted to fuel your ambition. Start building your future today!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
      </Wrapper>
  );
};

export default Landing;