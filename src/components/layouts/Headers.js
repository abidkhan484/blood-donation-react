import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/registration" exact>Registraion</NavLink></li>
      </ul>
    </nav>
  );
};

export default Header;
