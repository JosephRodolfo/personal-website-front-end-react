import Navigation from "./Nav";
import { Link } from "react-router-dom";

const BlogPostPage = (props) => (
  <div className="homepage">
    <div className="content-container">
        <div className="post-title__content">
      <h1 className="blog-post-title">All About Off-Whites</h1>
      </div>
    <div className="post-date-link">
      <p>May 22, 2022</p>
      <Link to="/">
        <a>See all posts</a>
      </Link>
      </div>
    </div>
    <div className="content-container">
      <p className="blog-post-text">
        The Three-Body Problem (Chinese: 三体; lit. 'Three-Body'; pinyin: sān
        tǐ) is a science fiction novel written by the Chinese writer Liu Cixin.
        The title refers to the three-body problem in orbital mechanics. It is
        the first novel of the Remembrance of Earth's Past (Chinese: 地球往事)
        trilogy, but the whole series is normally referred to as The Three-Body
        Problem.[1] The trilogy's second and third novels are The Dark Forest
        and Death's End respectively. 
        <br />

        The first volume of The Three-Body Problem
        was first serialized in Science Fiction World between May and December
        2006.[2] It was published as a standalone book in 2008, becoming one of
        the most successful Chinese science fiction novels of the last two
        decades.[3] The novel received the Chinese Science Fiction Yinhe
        ("Galaxy") Award in 2006[4] along with many more over the years. By
        2015, a Chinese film adaptation of the same name was in production. The
        English translation by Ken Liu was published by Tor Books in 2014.[5]
        Thereafter, it became the first Asian novel ever to win a Hugo Award for
        Best Novel,[6][7] and was nominated for the Nebula Award for Best
        Novel.[8] 
        <br />The series portrays a future where, in the first book, Earth
        is awaiting an invasion from the closest star system, which, in this
        universe, consists of three solar-type stars orbiting each other in an
        unstable three-body system. Within the system, its single Earth-like
        planet is being unhappily passed among them and suffers from extremes of
        heat and cold, as well as the repeated destruction of its intelligent
        civilizations.
      </p>
    </div>
  </div>
);

export default BlogPostPage;
