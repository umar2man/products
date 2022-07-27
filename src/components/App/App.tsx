import React, { createContext } from "react";
import Header from "../Header/Header";
import CardList from "../CardList/CardList";
import products from "../../products";
import { numberVoidFunc } from "../../types/types";
import { AppAction, AppState, ProductsContextValue } from "./AppTypes";

export const ProductsContext = React.createContext<ProductsContextValue | null>(null);

class App extends React.Component<{}, AppState> {
	constructor(props: any) {
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

	toogleProductToCart: numberVoidFunc = (id) => {
		const { cart, products } = this.state;
		const inCart = cart.cartProducts.find((prod) => prod.id === id);
		const produstCard = products.find((prod) => prod.id === id);

		if (produstCard?.id === id) {
			const newProducts = products.map((prod) => {
				if (prod.id === id) {
					prod.quantity = inCart ? prod.quantity + inCart?.amount! : prod.quantity - 1;
				}
				return prod;
			});

			const totalPrice = inCart
				? cart.totalPrice - produstCard.price * inCart?.amount!
				: cart.totalPrice + produstCard.price;

			const cartProducts = inCart
				? cart.cartProducts.filter((prod) => prod.id !== id)
				: [...cart.cartProducts, { ...produstCard, amount: 1 }];

			this.setState({
				products: newProducts,
				cart: {
					totalPrice,
					cartProducts,
				},
			});
		}
	};

	changeProductAmount = (id: number, type: boolean) => {
		const { cart, products } = this.state;

		const newProducts = products.map((prod) => {
			if (prod.id === id) {
				prod.quantity = type ? prod.quantity - 1 : prod.quantity + 1;
			}
			return prod;
		});

		const cartProducts = cart.cartProducts.map((prod) => {
			if (prod.id === id) {
				prod.amount = type ? prod.amount! + 1 : prod.amount! - 1;
			}
			return prod;
		});

		const totalPrice = cart.totalPrice + cart.cartProducts.find((prod) => prod.id === id)?.price!;

		this.setState({
			products: newProducts,
			cart: {
				cartProducts,
				totalPrice,
			},
		});
	};

	render() {
		const { text, cart, products } = this.state;

		const state: AppState = {
			text,
			products,
			cart,
		};

		const appAction: AppAction = {
			changeText: (text: string) =>
				this.setState({
					text,
				}),
			toogleProductToCart: this.toogleProductToCart,
			changeProductAmount: this.changeProductAmount,
		};

		return (
			<ProductsContext.Provider value={{ state, appAction }}>
				<div className="app">
					<Header />
					<CardList products={products} cartProducts={cart.cartProducts} keyWord={text} />
				</div>
			</ProductsContext.Provider>
		);
	}
}

export default App;
