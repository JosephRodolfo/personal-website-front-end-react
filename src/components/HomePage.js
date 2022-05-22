import ArticleList from "./ArticleList";
import Navigation from "./Nav";

const HomePage = () => (
  <div className="homepage">
    <div className="content-container">
      <Navigation />
      <ArticleList />
    </div>
  </div>
);

export default HomePage;
