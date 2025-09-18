import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";

function Header() {
  return (
    <nav>
      <Link className="nav-link" to="/">
        Header
      </Link>
      <ul id="nav-items">
        <li>
          <Link className="nav-link" to="/signup">
            Signup
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
