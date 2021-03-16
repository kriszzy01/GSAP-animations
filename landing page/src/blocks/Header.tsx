import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "../components/Menu";

export const Header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setToggleMenu((toggleMenu) => !toggleMenu);

    return () => setToggleMenu((toggleMenu) => !toggleMenu);
  }, []);

  return (
    <header>
      <div>
        <Link to="/shopper" onClick={() => setToggleMenu(false)}>
          Shopper
        </Link>

        <button type="button" onClick={handleToggleMenu}>
          {toggleMenu ? "Close" : "Menu"}
        </button>
      </div>

      <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </header>
  );
};
