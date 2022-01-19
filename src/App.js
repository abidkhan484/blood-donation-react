// import logo from './logo.svg';
import "./App.css";
import Donors from "./components/Donors";
import AddDonor from "./components/AddDonor";
import { Component } from "react";
import { Container } from "@material-ui/core";


export default class App extends Component {
  render() {
    return (
      <Container>
        {/* <AddDonor /> */}
        <Donors />
      </Container>
    );
  }
}
