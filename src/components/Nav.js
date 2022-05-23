import { Link } from "react-router-dom";
import BlogPostPage from "./BlogPostPage";
const Navigation = () => (
  <nav className="nav">
    <div className="content-container">
      <div className="nav__content">
        <ul>
          <li>About Me</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Programming</li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
