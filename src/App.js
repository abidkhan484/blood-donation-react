// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Donors from "./components/donorComponents/Donors";
import Registraion from "./components/donorComponents/Registraion";
import Header from "./components/layouts/Headers";
import { Container } from "@material-ui/core";


export default function App() {
  return (
    <Container>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Donors/>} />
        <Route path="/registration" element={<Registraion/>} />
      </Routes>
    </Router>
    </Container>
  );
}
