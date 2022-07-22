import React from "react";
import { ProductsContext } from "../App";
import Logo from "./Logo";
import SearchBlcok from "./Search/SearchBlcok";
import Total from "./Total";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo />
        <ProductsContext.Consumer>
          {(value) => <SearchBlcok changeText={value.changeText} />}
        </ProductsContext.Consumer>
        <ProductsContext.Consumer>
          {(value) => <Total totalPrice={value.totalPrice} />}
        </ProductsContext.Consumer>
      </header>
    );
  }
}

export default Header;
