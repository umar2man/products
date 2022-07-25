import React from "react";
import { ProductsContext } from "./App";
import Card from "./Card";

class CardList extends React.Component {
	render() {
		const { products, keyWord } = this.props;

		return (
			<div className="card-list">
				{products.map((item) => {
					if (item.title.toLowerCase().includes(keyWord.toLowerCase())) {
						return (
							<ProductsContext.Consumer key={item.id}>
								{({ toogleProduct, increment, decrement }) => (
									<Card item={item} toogleProduct={toogleProduct} increment={increment} decrement={decrement} />
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
