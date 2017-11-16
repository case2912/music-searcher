import * as React from "react";
import styled from "styled-components";
import Header from "./Header";
import ItemList from "./ItemList";
import Search from "./Search";
const Content = styled.div`
  padding-top:75px;
`;
class App extends React.Component<{}, { value: string, json: Object }> {
  constructor(props: any) {
    super(props);
    this.state = { value: "", json: {} };
  }
  public render() {
    return (
      <div className="App">
        <Header />
        <Content>
          <Search value={this.state.value} />
          <ItemList json={this.state.json} />
        </Content>
      </div>
    );
  }

}

export default App;
