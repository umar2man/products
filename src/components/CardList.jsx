import React from "react";
import { ProductsContext } from "./App";
import Card from "./Card";

class CardList extends React.Component {
	render() {
		return (
			<div className="cardList">
				{this.props.products.map((item) => {
					if (item.title.toLowerCase().includes(this.props.keyWord.toLowerCase())) {
						return (
							<ProductsContext.Consumer key={item.id}>
								{(value) => (
									<Card
										id={item.id}
										title={item.title}
										img={item.img}
										price={item.price}
										left={item.left}
										amount={item.amount}
										toogleProduct={value.toogleProductToCart}
										increment={value.increment}
										productsInCart={value.productsInCart}
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
