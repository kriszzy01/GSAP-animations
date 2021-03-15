import React, { useEffect, useState, useRef, useCallback } from "react";
import { withRouter, useHistory, Link } from "react-router-dom";
import { Menu } from "../components/Menu";
import { State } from "../types";

export const Header: React.FC = () => {
  const [state, setState] = useState<State>({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  const [disabled, setDisabled] = useState(false);

  const history = useHistory();

  const disableMenu = () => {
    setDisabled((disabled) => !disabled);

    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const toggleMenu = () => {
    disableMenu();

    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  useEffect(() => {
    history.listen(() => setState({ clicked: false, menuName: "Menu" }));
  }, [history]);

  return (
    <header>
      <div>
        <Link to="/shopper">Shopper</Link>

        <button type="button" disabled={disabled} onClick={toggleMenu}>
          {state.menuName}
        </button>
      </div>

      <Menu state={state} />
    </header>
  );
};
