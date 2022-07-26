import React from "react";
import { ProductsArrayType } from "../types/types";
import { ProductsContext } from "./App";
import Card from "./Card";

interface CardListProps {
	products: ProductsArrayType;
	cartProducts: ProductsArrayType;
	keyWord: string;
}

class CardList extends React.Component<CardListProps> {
	render() {
		const { products, cartProducts, keyWord } = this.props;

		return (
			<div className="card-list">
				{products.map((item) => {
					if (item.title.toLowerCase().includes(keyWord.toLowerCase())) {
						return (
							<ProductsContext.Consumer key={item.id}>
								{(value) => (
									<Card
										item={item}
										itemAmount={cartProducts.find((prod) => prod.id === item.id)?.amount}
										toogleProduct={value?.appAction.toogleProductToCart!}
										incrementProductAmount={value?.appAction.incrementProductAmount!}
										decrementProductAmount={value?.appAction.decrementProductAmount!}
									/>
								)}
							</ProductsContext.Consumer>
						);
					}
				})}
			</div>
		);
	}
}

export default CardList;
