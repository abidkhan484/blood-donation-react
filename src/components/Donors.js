import axios from "axios";
import React, {useState, useEffect} from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DonorList from "./DonorList";

export default function Donors() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/donors").then((res) => {
      setDonors(res.data);
    });
  }, []);

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
              return <DonorList donor={donor} key={donor.Sl} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
