import React from "react";
import ReactDOM from "react-dom";
import { PortalProps } from "./PortalTypes";

class Portal extends React.Component<PortalProps> {
	el = document.createElement("div");

	componentDidMount() {
		document.body.appendChild(this.el);
	}

	componentWillUnmount() {
		document.body.removeChild(this.el);
	}

	render() {
		const { img, title, price, quantity } = this.props.item;
		const { closeModalWindow } = this.props;

		return ReactDOM.createPortal(
			<div className="modal-background" onClick={closeModalWindow}>
				<div className="modal-card">
					<div className="modal-card-img">
						<img src={img} alt="modal-cart-image" />
					</div>
					<div className="modal-card-title">{title}</div>
					<div className="modal-card-info">
						<div className="modal-card-price">Цена: {price}</div>
						<div className="modal-card-left">В наличии: {quantity}</div>
					</div>
				</div>
			</div>,
			this.el
		);
	}
}

export default Portal;
