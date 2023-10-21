import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log("navigation.component.js currentUser: ", currentUser);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={logo} alt="The Gym Outlet logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/authentication">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
