import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="">
      <div className="navbar-brand">
        <NavLink to="/">My Blog</NavLink>
      </div>

      <div className="navbar-links ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

