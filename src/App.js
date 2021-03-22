// import logo from './logo.svg';
import "./App.css";
import Donors from "./components/Donors";
import AddDonor from "./components/AddDonor";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <>
        <AddDonor />
        <Donors />
      </>
    );
  }
}
