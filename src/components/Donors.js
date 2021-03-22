import axios from "axios";
import React, { Component } from "react";
import Donor from "./Donor";

export default class Donors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donors: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/donors").then((res) => {
      const donors = res.data;
      this.setState({ donors });
    });
  }

  render() {
    const { donors } = this.state;
    return (
      <table className="own-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Contact Number</th>
            <th>Last Donation Date</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <Donor donor={donor} key={donor.Sl} />
          ))}
        </tbody>
      </table>
    );
  }
}
