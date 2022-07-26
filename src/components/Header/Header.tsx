import React from "react";
import { ProductsContext } from "../App";
import logo from "../../assets/logo.png";
import SearchBlcok from "./SearchBlcok";

class Header extends React.Component<{}, {}> {
	render() {
		return (
			<header>
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<ProductsContext.Consumer>
					{(value) => <SearchBlcok changeText={value?.appAction.changeText!} />}
				</ProductsContext.Consumer>
				<ProductsContext.Consumer>
					{(value) => <div className="total">Общая стоимость выбранных товаров: {value?.state.cart.totalPrice}р.</div>}
				</ProductsContext.Consumer>
			</header>
		);
	}
}

export default Header;
