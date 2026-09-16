import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="d-flex justify-content-between align-items-center p-3 bg-light">
      <div className="navbar-brand ">
        <NavLink to="/">My Blog</NavLink>
      </div>

      <div className="navbar-links d-flex align-items-center gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

