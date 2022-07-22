import React from "react";

class Total extends React.Component {
  render() {
    return (
      <div className="total">
        Общая стоимость выбранных товаров: {this.props.totalPrice}р.
      </div>
    );
  }
}

export default Total;
