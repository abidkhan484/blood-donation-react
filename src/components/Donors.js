import axios from "axios";
import React, { Component } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

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
      <TableContainer component={Paper}>
        <Table aria-label="Simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Blood Group</TableCell>
              <TableCell align="center">Contact Number</TableCell>
              <TableCell align="center">Last Donation Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donors.map((donor) => {
              return <Donor donor={donor} key={donor.Sl} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
