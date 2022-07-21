import React from "react";
import Logo from "./Logo";
import SearchBlcok from "./Search/SearchBlcok";
import Total from "./Total";

class Header extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <header>
        <Logo />
        <SearchBlcok />
        <Total />
      </header>
    );
  }
}

export default Header;
