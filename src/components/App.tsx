import React, { createContext } from "react";
import Header from "./Header/Header";
import CardList from "./CardList";
import products from "../products";
import { numberVoidFunc, ProductsArrayType, textVoidFunc } from "../types/types";

interface CartType {
	cartProducts: ProductsArrayType;
	totalPrice: number;
}

interface AppState {
	text: string;
	products: ProductsArrayType;
	cart: CartType;
}

interface AppAction {
	changeText: textVoidFunc;
	toogleProductToCart: numberVoidFunc;
	incrementProductAmount: numberVoidFunc;
	decrementProductAmount: numberVoidFunc;
}

interface ProductsContextValue {
	state: AppState;
	appAction: AppAction;
}

export const ProductsContext = React.createContext<ProductsContextValue | null>(null!);

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
		products.map((item) => {
			if (item.id === id) {
				const inCart = cart.cartProducts.find((prod) => prod.id === id);

				const newProducts = products.map((prod) => {
					if (prod.id === id) {
						prod.left = inCart ? prod.left + inCart?.amount! : prod.left - 1;
					}
					return prod;
				});

				const totalPrice = inCart ? cart.totalPrice - item.price * inCart?.amount! : cart.totalPrice + item.price;

				const cartProducts = inCart
					? cart.cartProducts.filter((prod) => prod.id !== id)
					: [...cart.cartProducts, { ...item, amount: 1 }];

				this.setState({
					products: newProducts,
					cart: {
						totalPrice,
						cartProducts,
					},
				});
			}
		});
	};

	incrementProductAmount: numberVoidFunc = (id) => {
		const { cart, products } = this.state;

		const newProducts = products.map((prod) => {
			if (prod.id === id) {
				prod.left = prod.left - 1;
			}
			return prod;
		});

		const cartProducts = cart.cartProducts.map((prod) => {
			if (prod.id === id) {
				prod.amount = prod?.amount! + 1;
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

	decrementProductAmount: numberVoidFunc = (id) => {
		const { cart, products } = this.state;

		const newProducts = products.map((prod) => {
			if (prod.id === id) {
				prod.left = prod.left + 1;
			}
			return prod;
		});

		const cartProducts = cart.cartProducts.map((prod) => {
			if (prod.id === id) {
				prod.amount = prod?.amount! - 1;
			}
			return prod;
		});

		const totalPrice = cart.totalPrice - cart.cartProducts.find((prod) => prod.id === id)?.price!;

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
			incrementProductAmount: this.incrementProductAmount,
			decrementProductAmount: this.decrementProductAmount,
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
