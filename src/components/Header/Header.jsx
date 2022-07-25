import React from "react";
import { ProductsContext } from "../App";
import logo from "../../assets/logo.png";
import SearchBlcok from "./Search/SearchBlcok";

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<ProductsContext.Consumer>
					{({ changeText }) => <SearchBlcok changeText={changeText} />}
				</ProductsContext.Consumer>
				<ProductsContext.Consumer>
					{({ totalPrice }) => <div className="total">Общая стоимость выбранных товаров: {totalPrice}р.</div>}
				</ProductsContext.Consumer>
			</header>
		);
	}
}

export default Header;
