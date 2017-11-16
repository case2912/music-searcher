import * as React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import ItemList from "./ItemList";
import Search from "./Search";
class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div className="App">
        <Header />
        <div className="Container" style={{ paddingTop: "75px" }}>
          <Search {...this.props} />
          <ItemList {...this.props} />
        </div>
      </div>
    );
  }

}

export default connect((state: any) => state.app)(App);
