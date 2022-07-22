import React from "react";

class SearchButton extends React.Component {
  render() {
    return (
      <button className="searchButton" onClick={this.props.search}>
        Поиск
      </button>
    );
  }
}

export default SearchButton;
