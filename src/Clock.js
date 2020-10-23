import React, { Component } from "react";
import DateClass from "./DateClass";
import DateFunction from "./DateFunction";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      datetime: new Date(),
      dateIsFunction: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      dateIsFunction: !this.state.dateIsFunction,
    });
  }

  tick() {
    this.setState({
      dateTime: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log("mount");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("unmount");
  }

  render() {
    var dateComponent;
    if (this.state.dateIsFunction) {
      dateComponent = <DateFunction />;
    } else {
      dateComponent = <DateClass date={this.state.datetime} />;
    }

    return (
      <div>
        {dateComponent}

        {this.state.datetime.toLocaleTimeString()}

        <br />
        <br />
        <p>Change date component to</p>
        <button
          onClick={this.handleClick}
          style={{ padding: "5px 10px", fontSize: "1rem" }}
        >
          {this.state.dateIsFunction ? "CLASS" : "FUNCTION"}+
        </button>
      </div>
    );
  }
}
