import React from "react";
import SearchButton from "./SearchButton";
import Input from "./Input";

class SearchBlcok extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="searchBlock">
                <Input />
                <SearchButton />
            </div>
        )
    }
}

export default SearchBlcok;