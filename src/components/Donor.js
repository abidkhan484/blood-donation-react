import { TableCell, TableRow } from "@material-ui/core";
import React, { Component } from "react";

export default class Donor extends Component {
  render() {
    const { donor } = this.props;
    return (
      <TableRow>
        <TableCell align="center" component="th" scope="row">{donor["Name"]}</TableCell>
        <TableCell align="center" component="th" scope="row">{donor["Blood Group"]}</TableCell>
        <TableCell align="center" component="th" scope="row">{donor["Contact Number"]}</TableCell>
        <TableCell align="center" component="th" scope="row">{donor["Last Blood Donation Date (Approx)"]}</TableCell>
      </TableRow>
    );
  }
}
