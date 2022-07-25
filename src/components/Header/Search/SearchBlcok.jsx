import React from "react";

class SearchBlcok extends React.Component {
	constructor(props) {
		super(props);

		this.state = { inputText: "" };
	}

	handleInputText = (e) => {
		this.setState({
			inputText: e.target.value,
		});
	};

	render() {
		return (
			<div className="search-block">
				<div className="input-block">
					<input type="text" placeholder="Название товара" onChange={this.handleInputText} />
				</div>
				<button className="search-button" onClick={() => this.props.changeText(this.state.inputText)}>
					Поиск
				</button>
			</div>
		);
	}
}

export default SearchBlcok;
