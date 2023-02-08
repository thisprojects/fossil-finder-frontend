import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to={"/"}>Home</Link>
      <Link to={"/"}>About</Link>
      <Link to={"/"}>Mesozoic Australia</Link>
    </div>
  );
};

export default Navbar;
