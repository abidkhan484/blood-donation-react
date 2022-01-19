import { TableCell, TableRow } from "@material-ui/core";

export default function DonorList({ donor }) {
  return (
    <TableRow>
      <TableCell align="center" component="th" scope="row">{donor["Name"]}</TableCell>
      <TableCell align="center" component="th" scope="row">{donor["Blood Group"]}</TableCell>
      <TableCell align="center" component="th" scope="row">{donor["Contact Number"]}</TableCell>
      <TableCell align="center" component="th" scope="row">{donor["Last Blood Donation Date (Approx)"]}</TableCell>
    </TableRow>
  )
}
