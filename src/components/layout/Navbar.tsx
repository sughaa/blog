import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <NavLink to="/">My Blog</NavLink>
      </div>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;