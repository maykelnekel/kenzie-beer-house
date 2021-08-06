import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/products">
          <div>
            <p>Products</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/casamento">
          <div>
            <p>Wedding</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/confrat">
          <div>
            <p>Party</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/formatura">
          <div>
            <p>Graduation</p>
          </div>
        </Link>
      </li>
    </ul>
  );
};
export default Nav;
