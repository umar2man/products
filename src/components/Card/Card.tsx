import React, { ContextType } from "react";
import { CadProps, CardState } from "./CardTypes";
import Portal from "../Portal/Portal";
import { ProductsContext } from "../App/App";

class Card extends React.Component<CadProps, CardState> {
	static contextType = ProductsContext;
	context!: React.ContextType<typeof ProductsContext>;

	constructor(props: CadProps) {
		super(props);

		this.state = {
			inCart: false,
			modalView: false,
		};
	}

	incrementProductAmount = (e: React.MouseEvent) => {
		e.stopPropagation();

		this.context?.appAction.changeProductAmount(this.props.item.id, true);
	};

	decrementProductAmount = (e: React.MouseEvent) => {
		e.stopPropagation();

		this.props.itemAmount === 1
			? this.selectProduct()
			: this.context?.appAction.changeProductAmount(this.props.item.id, false);
	};

	selectProduct = () => {
		this.setState(function (prevState, props) {
			return { inCart: !prevState.inCart };
		});

		this.context?.appAction.toogleProductToCart(this.props.item.id);
	};

	openModalWindow = (e: React.MouseEvent) => {
		e.stopPropagation();

		this.setState({ modalView: true });
	};

	closeModalWindow = (e: React.MouseEvent) => {
		e.stopPropagation();

		this.setState({ modalView: false });
	};

	render() {
		const {
			itemAmount,
			item: { img, title, price, quantity },
		} = this.props;

		const { inCart } = this.state;

		return (
			<div className={inCart ? "card-block selected-card" : "card-block"} onClick={this.selectProduct}>
				<div className="card-img">
					<img src={img} alt="cart-image" />
				</div>
				<div className="card-title">{title}</div>
				<div className="card-info">
					<div className="card-price">Цена: {price}</div>
					<div className="card-left">Осталось: {quantity}</div>
				</div>
				<div className="amount-block">
					<button className="dec-btn" disabled={!inCart} onClick={this.decrementProductAmount}>
						-
					</button>
					<div className="amount">{itemAmount || 0}</div>
					<button className="inc-btn" disabled={!inCart || quantity === 0} onClick={this.incrementProductAmount}>
						+
					</button>
				</div>
				<div className={inCart ? "view-details white" : "view-details"} onClick={this.openModalWindow}>
					Детальный просмотр
				</div>
				{this.state.modalView ? <Portal closeModalWindow={this.closeModalWindow} item={this.props.item} /> : null}
			</div>
		);
	}
}

export default Card;
