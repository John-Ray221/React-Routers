import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <ul>
          <li>
            <NavLink className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" activeClassName="active" to="/shop">
              Shop
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
