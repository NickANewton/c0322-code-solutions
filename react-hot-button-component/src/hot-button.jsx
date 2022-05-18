import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const count = this.state.count;
    this.setState({ count: count + 1 });
  }

  render() {
    const counter = this.state.count;
    let button;
    if (counter < 3) {
      button = <button onClick={this.handleClick}>Hot Button</button>;
    } else if (counter < 6) {
      button = <button className="dk-purp" onClick={this.handleClick}>Hot Button</button>;
    } else if (counter < 9) {
      button = <button className="lt-purp" onClick={this.handleClick}>Hot Button</button>;
    } else if (counter < 12) {
      button = <button className="red" onClick={this.handleClick}>Hot Button</button>;
    } else if (counter < 15) {
      button = <button className="orange" onClick={this.handleClick}>Hot Button</button>;
    } else if (counter < 18) {
      button = <button className="yellow" onClick={this.handleClick}>Hot Button</button>;
    } else {
      button = <button className="white" onClick={this.handleClick}>Hot Button</button>;
    }
    return (
      button
    );
  }
}

export default HotButton;
