import { Link } from "react-router-dom";
// import "./Nav.css";
function Nav() {

  
  return (
    <nav className="nav-bar">
      <div className="nav">
        <Link className="nav-links" to="/">
          Coin
        </Link>
        <Link className="nav-links" to="/trending/id">
          Trending
        </Link>
        {/* <Link className="nav-links" to="/form/id">
          Add movies
        </Link>
        <Link className="nav-links" to="/about/id">
          About{" "}
        </Link> */}
      </div>
    </nav>
  );
}
export default Nav;