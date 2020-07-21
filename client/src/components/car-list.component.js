import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

const Car = props => (
  <tr>
    <td>{props.car.name}</td>
    <td>{props.car.type}</td>
    <td>{props.car.rented ? "Yes" : "No"}</td>
    <td>
      {props.car.rented ?
        <button type="button" className="btn btn-dark" to={"/rent/" + props.car._id} disabled>Rent</button>
        :
        <Link type="button" className="btn btn-dark" to={"/rent/" + props.car._id}>Rent</Link>}
    </td>
  </tr>
);


export default class CarList extends Component {

  state = { cars: [] };

  componentDidMount() {
    axios.get('/api')
      .then(response => {
        this.setState({ cars: response.data })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const cars_list = this.state.cars.map(car => {
      return <Car car={car} rentCar={this.deleteExercise} key={car._id} />;
    });
    return cars_list.length > 0 ? (
      <div style={{ "width": "auto" }}>
        <h3>Cars List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Rented</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars_list}
          </tbody>
        </table>
      </div>
    )
      : (
        <Loader className="center" style={{ "margin-top": "150px" }}
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={5000} //5 secs
        />
      );
  }
}