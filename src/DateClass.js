import React, { Component } from "react";

export default class DateClass extends Component {
  render() {
    return (
      <>
        <h1>Date Class</h1>
        <p>{this.props.date.toDateString()}</p>
      </>
    );
  }
  dateTime;
}
