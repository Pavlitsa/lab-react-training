import React, { Component } from "react";

class ClickablePicture extends Component {
  state = {
    unclickedImage: this.props.img,
    clickedImage: this.props.imgClicked
    //classes accept props
  };

  // the name is just convention, I can call it whatever I want

  // it takes two arguments, the first one is my object, which will replace the specific key that we want to replace
  // the second one is a callback function, where I can see the updated

  handleClick = () => {
    if (this.state.unclickedImage === false) {
      this.setState({
        clickedImage: true
      });
    } else if (this.state.unclickedImage === true) {
      this.setState({
        clickedImage: false
      });
    }
  };

  // first thing we always do is set up a render function
  render() {
    console.log("render function", this.state);
    return <img onClick={handleClick} src={this.props.img} alt="" />;
  }
}

export default ClickablePicture;
