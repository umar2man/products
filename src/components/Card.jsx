import React from "react";

class Card extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inCart: false,
		};
	}

	increment = (e) => {
		e.stopPropagation();

		this.props.increment(this.props.item.id);
	};

	decrement = (e) => {
		e.stopPropagation();

		if (this.props.item.amount === 1) {
			this.selectProduct();
		} else {
			this.props.decrement(this.props.item.id);
		}
	};

	selectProduct = () => {
		this.setState(function (prevState, props) {
			return { inCart: !prevState.inCart };
		});

		this.props.toogleProduct(this.props.item.id);
	};

	render() {
		const { img, title, price, left, amount } = this.props.item;

		const { inCart } = this.state;

		return (
			<div className={inCart ? "card-block selected-card" : "card-block"} onClick={this.selectProduct}>
				<div className="card-img">
					<img src={img} alt="cart-image" />
				</div>
				<div className="card-title">{title}</div>
				<div className="card-info">
					<div className="card-price">Цена: {price}</div>
					<div className="card-left">Осталось: {left}</div>
				</div>
				<div className="amount-block">
					<button className="dec-btn" disabled={!inCart && "disabled"} onClick={this.decrement}>
						-
					</button>
					<div className="amount">{amount}</div>
					<button className="inc-btn" disabled={!inCart || left === 0 ? "disabled" : ""} onClick={this.increment}>
						+
					</button>
				</div>
				<div className={inCart ? "view-details white" : "view-details"}>Детальный просмотр</div>
			</div>
		);
	}
}

export default Card;
