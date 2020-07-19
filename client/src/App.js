import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import CarList from "./components/car-list.component";
import RentCar from "./components/rent-car.component";
import AddCar from "./components/add-car.component";
import CarPricing from "./components/car-pricing.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={CarList} />
        <Route path="/add" component={AddCar} />
        <Route path="/pricing" component={CarPricing} />
        <Route path="/rent/:id" component={RentCar} />
      </div>
    </Router>
  );
}

export default App;
