import React from "react";
import Header from "./Header/Header";

class App extends React.Component<{}, {}> {
  render (): React.ReactNode {
    return (
      <div className="app">
        <Header />
      </div>
    )
  }
}

export default App;
