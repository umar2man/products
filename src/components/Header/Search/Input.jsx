import React, { ChangeEvent } from "react";
import { ProductsContext } from "../../App";

class Input extends React.Component {
  render() {
    return (
      <div className="inputBlock">
        <input
          type="text"
          placeholder="Название товара"
          onChange={(e) => this.props.handleInputText(e.target.value)}
        />
      </div>
    );
  }
}

export default Input;
