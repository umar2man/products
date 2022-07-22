import React from "react";

class Card extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			doCartIncludesProduct: this.props.productsInCart.find((item) => {
				return item.id === this.props.id;
			}),
		};
	}

	increment = (e) => {
		e.stopPropagation();
		// this.props.increment(this.props.id);
		console.log(this.props.productsInCart);
	};

	render() {
		return (
			<div
				className={this.state.doCartIncludesProduct ? "cardBlock selectedCard" : "cardBlock"}
				onClick={() => this.props.toogleProduct(this.props.id)}
			>
				<div className="cardImg">
					<img src={this.props.img} alt="image" />
				</div>
				<div className="cardTitle">{this.props.title}</div>
				<div className="cardInfo">
					<div className="cardPrice">Цена: {this.props.price}</div>
					<div className="cardLeft">Осталось: {this.props.left}</div>
				</div>
				<div className="amountBlock">
					<button className="decBtn" onClick={this.decrement}>
						-
					</button>
					<div className="amount">{this.props.amount}</div>
					<button className="incBtn" onClick={this.increment}>
						+
					</button>
				</div>
			</div>
		);
	}
}

export default Card;
