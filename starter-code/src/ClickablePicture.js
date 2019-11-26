import React, { Component } from "react";

class ClickablePicture extends Component {
  //
  state = {
    unclicked: true,
    myImage: this.props.img
    //classes accept props
  };

  // the name is just convention, I can call it whatever I want

  // it takes two arguments, the first one is my object, which will replace the specific key that we want to replace
  // the second one is a callback function, where I can see the updated

  handleClick = () => {
    if (this.state.unclicked === true) {
      this.setState({
        unclicked: false,
        myImage: this.props.imgClicked
      });
    } else if (this.state.unclicked === false) {
      this.setState({
        unclicked: true,
        myImage: this.props.img
      });
    }
  };

  // first thing we always do is set up a render function
  render() {
    // console.log("render function", this.state);
    return <img onClick={this.handleClick} src={this.state.myImage} alt="image" />;
  }
}

export default ClickablePicture;
