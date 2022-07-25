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
			products,
			cart: {
				cartProducts: [],
				totalPrice: 0,
			},
		};
	}

	toogleProductToCart = (id) => {
		const { cart, products } = this.state;
		products.map((item) => {
			// I need this "item"...
			if (item.id === id) {
				if (!!cart.cartProducts.find((prod) => prod.id === id)) {
					this.setState({
						cart: {
							cartProducts: cart.cartProducts.filter((prod) => prod.id !== id),
							totalPrice: cart.totalPrice - item.price * item.amount,
						},
						products: products.map((prod) => {
							if (prod.id === id) {
								prod.left = prod.left + prod.amount;
								prod.amount = 0;
							}
							return prod;
						}),
					});
				} else {
					this.setState({
						cart: {
							// ...here, that's why I didn't use destructurization
							cartProducts: [...cart.cartProducts, item],
							totalPrice: cart.totalPrice + item.price,
						},
						products: products.map((prod) => {
							if (prod.id === id) {
								prod.amount = prod.amount + 1;
								prod.left = prod.left - 1;
							}
							return prod;
						}),
					});
				}
			}
		});
	};

	increment = (id) => {
		const { cart, products } = this.state;
		this.setState({
			cart: {
				cartProducts: cart.cartProducts.map((prod) => {
					if (prod.id === id) {
						prod.amount = prod.amount + 1;
					}
					return prod;
				}),
				totalPrice: cart.totalPrice + cart.cartProducts.find((prod) => prod.id === id).price,
			},
			products: products.map((prod) => {
				if (prod.id === id) {
					prod.left = prod.left - 1;
				}
				return prod;
			}),
		});
	};

	decrement = (id) => {
		const { cart, products } = this.state;
		this.setState({
			cart: {
				cartProducts: cart.cartProducts.map((prod) => {
					if (prod.id === id) {
						prod.amount = prod.amount - 1;
					}
					return prod;
				}),
				totalPrice: cart.totalPrice - cart.cartProducts.find((prod) => prod.id === id).price,
			},
			products: products.map((prod) => {
				if (prod.id === id) {
					prod.left = prod.left + 1;
				}
				return prod;
			}),
		});
	};

	render() {
		const { text, cart, products } = this.state;

		const props = {
			text,
			totalPrice: cart.totalPrice,
			products,
			changeText: (text) =>
				this.setState({
					text,
				}),
			toogleProduct: this.toogleProductToCart,
			productsInCart: cart.cartProducts,
			increment: this.increment,
			decrement: this.decrement,
		};

		return (
			<ProductsContext.Provider value={props}>
				<div className="app">
					<Header />
					<CardList products={products} keyWord={this.state.text} />
				</div>
			</ProductsContext.Provider>
		);
	}
}

export default App;
