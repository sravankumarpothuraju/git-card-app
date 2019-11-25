import React from "react";

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div style={{ margin: "10px" }}>
        <img src={profile.avatar_url} style={{ width: "75px" }} />
        <div style={{ display: "inline-block", marginLeft: 10 }}>
          <div>{profile.name}</div>
          <div>{profile.company}</div>
        </div>
      </div>
    );
  }
}
export default Card;
