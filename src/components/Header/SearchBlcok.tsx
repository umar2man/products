import React from "react";
import { textVoidFunc } from "../../types/types";

interface SearchBlcokProps {
	changeText: textVoidFunc;
}

interface SearchBlcokState {
	inputText: string;
}

class SearchBlcok extends React.Component<SearchBlcokProps, SearchBlcokState> {
	constructor(props: SearchBlcokProps) {
		super(props);

		this.state = { inputText: "" };
	}

	handleInputText: textVoidFunc = (text) => {
		this.setState({
			inputText: text,
		});
	};

	render() {
		const { changeText } = this.props;
		const { inputText } = this.state;

		return (
			<div className="search-block">
				<div className="input-block">
					<input type="text" placeholder="Название товара" onChange={(e) => this.handleInputText(e.target.value)} />
				</div>
				<button className="search-button" onClick={() => changeText(inputText)}>
					Поиск
				</button>
			</div>
		);
	}
}

export default SearchBlcok;
