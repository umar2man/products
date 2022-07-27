import React from "react";
import { ProductsContext } from "../App/App";
import Card from "../Card/Card";
import { CardListProps } from "./CardListTypes";

class CardList extends React.Component<CardListProps> {
	render() {
		const { products, cartProducts, keyWord } = this.props;

		return (
			<div className="card-list">
				{products.map((item) => {
					if (item.title.toLowerCase().includes(keyWord.toLowerCase())) {
						return (
							<ProductsContext.Consumer key={item.id}>
								{(value) => <Card item={item} itemAmount={cartProducts.find((prod) => prod.id === item.id)?.amount} />}
							</ProductsContext.Consumer>
						);
					}
				})}
			</div>
		);
	}
}

export default CardList;
