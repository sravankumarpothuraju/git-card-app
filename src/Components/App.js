import React from "react";
import CardList from "./CardList";
import Form from "./Form";

class App extends React.Component {
  state = {
    profiles: []
  };
  addUserCard = profileData => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };
  render() {
    return (
      <div>
        <div style={{ textAlign: "center", fontSize: "150%" }}>
          {this.props.title}
        </div>
        <Form onSubmit={this.addUserCard} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
