const ArticleCard = (props) => (
  <div className="article-card">
    <p>{props.date}</p>

    <h2>{props.title}</h2>
  </div>
);

export default ArticleCard;
