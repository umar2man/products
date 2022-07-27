import React from "react";
import { ProductsContext } from "../App/App";
import logo from "../../assets/logo.png";
import SearchBlcok from "./SearchBlock/SearchBlcok";

class Header extends React.Component<{}, {}> {
	render() {
		return (
			<header>
				<div className="header">
					<div className="logo">
						<img src={logo} alt="logo" />
					</div>
					<ProductsContext.Consumer>
						{(value) => (
							<>
								<SearchBlcok changeText={value?.appAction.changeText!} />{" "}
								<div className="total">Общая стоимость выбранных товаров: {value?.state.cart.totalPrice}р.</div>
							</>
						)}
					</ProductsContext.Consumer>
				</div>
			</header>
		);
	}
}

export default Header;
