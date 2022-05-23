import { Link } from "react-router-dom";
const ArticleCard = (props) => (
  <div className="article-card">
    <p>{props.date}</p>

    <Link to="/post">  <h2>{props.title}</h2></Link>
  </div>
);

export default ArticleCard;
