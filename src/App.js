// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Donors from "./components/DonorComponents/Donors";
import AddDonor from "./components/DonorComponents/AddDonor";
import { Container } from "@material-ui/core";


export default function App() {
  return (
    <Container>
    <Router>
      <Routes>
        <Route path="/" element={<Donors/>} />
        <Route path="/new-donor" element={<AddDonor/>} />
      </Routes>
    </Router>
    </Container>
  );
}
