import { Link } from "react-router-dom";
import HomePage from "./HomePage";
const Header = () => (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link to="/"> <h1 className="header__title">J.R. Enderle's website</h1></Link> 
            <div className="border-bottom"></div>
            <div className="border-bottom"></div>
            <div className="border-bottom"></div>

        </div>
      </div>
    </header>
  );

  export default Header;