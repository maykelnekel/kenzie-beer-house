import { Link } from "react-router-dom";
import { Barra, Menu, MenuButton, Page } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowBarRight } from "react-icons/bs";

import { useState } from "react";

const Nav = () => {
  const [menuHamburguer, setMenuHamburguer] = useState(true);

  return (
    <Barra>
      <MenuButton onClick={() => setMenuHamburguer(!menuHamburguer)}>
        {menuHamburguer ? <BsArrowBarRight /> : <GiHamburgerMenu />}
      </MenuButton>
      {menuHamburguer && (
        <Menu>
          <Page>
            <Link to="/">
              <div>
                <p>Home</p>
              </div>
            </Link>
          </Page>
          <Page>
            <Link to="/products">
              <div>
                <p>Products</p>
              </div>
            </Link>
          </Page>
          <Page>
            <Link to="/casamento">
              <div>
                <p>Wedding</p>
              </div>
            </Link>
          </Page>
          <Page>
            <Link to="/confraternizacao">
              <div>
                <p>Party</p>
              </div>
            </Link>
          </Page>
          <Page>
            <Link to="/formatura">
              <div>
                <p>Graduation</p>
              </div>
            </Link>
          </Page>
        </Menu>
      )}
    </Barra>
  );
};
export default Nav;
