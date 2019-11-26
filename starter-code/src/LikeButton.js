import React, { Component } from "react";

class LikeButton extends Component {
  state = {
    likes: 0,
    colors: ["purple", "blue", "green", "yellow", "orange", "red"],
    number: 0
  };

  // the name is just convention, I can call it whatever I want

  handleClick = () => {
    let newLike = this.state.likes + 1;
    // it takes two arguments, the first one is my object, which will replace the specific key that we want to replace
    // the second one is a callback function, where I can see the updated
    let newNumber = (this.state.number + 1) % this.state.colors.length;
    this.setState(
      {
        likes: newLike,
        number: newNumber
      },
      () => console.log(this.state)
    );
  };

  // first thing we always do is set up a render function
  render() {
    console.log("render function", this.state);
    return (
      <button className="like-btn"
        style={{ backgroundColor: `${this.state.colors[this.state.number]}` }}
        onClick={this.handleClick}
      >
        {this.state.likes} likes
      </button>
    );
  }
}

export default LikeButton;
