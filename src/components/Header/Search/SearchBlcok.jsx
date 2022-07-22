import React from "react";
import SearchButton from "./SearchButton";
import Input from "./Input";
import { ProductsContext } from "../../App";

class SearchBlcok extends React.Component {
  constructor(props) {
    super(props);

    this.state = { inputText: "" };
  }

  handleInputText = (text) => {
    this.setState({
      inputText: text,
    });
  };

  search = () => {
    this.props.changeText(this.state.inputText);
  };

  render() {
    return (
      <div className="searchBlock">
        <Input handleInputText={this.handleInputText} />
        <SearchButton search={this.search} />
      </div>
    );
  }
}

export default SearchBlcok;
