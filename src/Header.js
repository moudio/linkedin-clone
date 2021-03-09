import React from "react";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div>
      <h1>This is the header</h1>

      <div className="header__left">
        <img src="" alt="" />
        <div className="header__search">
          {/* Search icon */}
          <input type="text" />
        </div>
      </div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
