import React, { Component } from "react";

export default class Donor extends Component {
  render() {
    const { donor } = this.props;
    return (
      <tr>
        <td>{donor["Name"]}</td>
        <td>{donor["Blood Group"]}</td>
        <td>{donor["Contact Number"]}</td>
        <td>{donor["Last Blood Donation Date (Approx)"]}</td>
      </tr>
    );
  }
}
