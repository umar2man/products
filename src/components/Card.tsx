import React from "react";
import { IProduct, numberVoidFunc } from "../types/types";

interface CadProps {
	item: IProduct;
	itemAmount: number | undefined;
	toogleProduct: numberVoidFunc;
	incrementProductAmount: numberVoidFunc;
	decrementProductAmount: numberVoidFunc;
}

interface CardState {
	inCart: boolean;
}

class Card extends React.Component<CadProps, CardState> {
	constructor(props: CadProps) {
		super(props);

		this.state = {
			inCart: false,
		};
	}

	incrementProductAmount = (e: React.MouseEvent) => {
		e.stopPropagation();

		this.props.incrementProductAmount(this.props.item.id);
	};

	decrementProductAmount = (e: React.MouseEvent) => {
		e.stopPropagation();

		if (this.props.itemAmount === 1) {
			this.selectProduct();
		} else {
			this.props.decrementProductAmount(this.props.item.id);
		}
	};

	selectProduct = () => {
		this.setState(function (prevState, props) {
			return { inCart: !prevState.inCart };
		});

		this.props.toogleProduct(this.props.item.id);
	};

	render() {
		const { img, title, price, left } = this.props.item;
		const { itemAmount } = this.props;

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
					<button className="dec-btn" disabled={!inCart} onClick={this.decrementProductAmount}>
						-
					</button>
					<div className="amount">{itemAmount || 0}</div>
					<button className="inc-btn" disabled={!inCart || left === 0} onClick={this.incrementProductAmount}>
						+
					</button>
				</div>
				<div className={inCart ? "view-details white" : "view-details"}>Детальный просмотр</div>
			</div>
		);
	}
}

export default Card;
