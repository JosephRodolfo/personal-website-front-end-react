import ArticleList from "./ArticleList";
import Navigation from "./Nav";
import Header from "./Header";
const HomePage = () => (
  <div className="homepage">
    <div className="content-container">
      <Header />

      <Navigation />
      <ArticleList />
    </div>
  </div>
);

export default HomePage;
