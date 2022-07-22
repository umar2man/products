import React, { createContext } from "react";
import Header from "./Header/Header";
import CardList from "./CardList";
import products from "../products";

export const ProductsContext = React.createContext();

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: "",
			products: products,
			cart: {
				cartProducts: [],
				totalPrice: 0,
			},
		};
	}

	changeText = (text) => {
		this.setState({
			text: text,
		});
	};

	toogleProductToCart = (id) => {
		this.state.products.map((item) => {
			if (item.id === id) {
				if (this.state.cart.cartProducts.includes(item)) {
					this.setState({
						cart: {
							// удаляем товар из корзины
							cartProducts: this.state.cart.cartProducts.filter((prod) => {
								return prod.id !== id;
							}),
							// уменьшаем тотал
							totalPrice: this.state.cart.totalPrice - item.price * item.amount,
						},
					});
				} else {
					this.setState({
						cart: {
							// добавляем товар в корзину
							cartProducts: [...this.state.cart.cartProducts, item],
							// добавялем прайс к тоталу
							totalPrice: this.state.cart.totalPrice + item.price * item.amount,
						},
					});
				}
			}
		});
		console.log(this.state.cart.cartProducts);
	};

	increment = (id) => {
		this.setState({
			cart: {
				// долбавляем количесвто продукта в корзине
				cartProducts: this.state.cart.cartProducts.map((prod) => {
					if (prod.id === id) {
						prod.amount = prod.amount + 1;
					}
					return prod;
				}),
				// totalPrice: this.state.cart.totalPrice + prod.price,
			},
		});
	};

	render() {
		return (
			<ProductsContext.Provider
				value={{
					text: this.state.text,
					totalPrice: this.state.cart.totalPrice,
					products: this.state.products,
					changeText: this.changeText,
					toogleProductToCart: this.toogleProductToCart,
					increment: this.increment,
					productsInCart: this.state.cart.cartProducts,
				}}
			>
				<div className="app">
					<Header />
					<CardList products={this.state.products} keyWord={this.state.text} />
				</div>
			</ProductsContext.Provider>
		);
	}
}

export default App;
