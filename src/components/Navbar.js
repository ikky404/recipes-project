import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="d-flex ">
        <img
          src="../images/icon-cooking.jpg"
          className="nav--logo"
          alt="logo"
        />
        <h3 className="nav-name">Simple Recipes</h3>
      </div>
      <div>
        <h3 className="me-4">
          <Link to="/">Home</Link>
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;
