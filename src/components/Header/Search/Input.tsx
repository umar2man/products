import React, { ChangeEvent } from "react";

class Input extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.state = { text: "" };
  }

  handleInput({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    this.setState({
      text: value,
    });
  }

  render(): React.ReactNode {
    return (
      <div className="inputBlock">
        <input
          type="text"
          placeholder="Название товара"
          onChange={this.handleInput}
        />
      </div>
    );
  }
}

export default Input;
