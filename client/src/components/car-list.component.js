import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Car = props => {

  return (
    <tr>
      <td>{props.car.name}</td>
      <td>{props.car.type}</td>
      <td>{props.car.rented ? "Yes" : "No"}</td>
      <td>
        {props.car.rented ? "NA"
          :
          <Link type="button" className="btn btn-dark" to={"/rent/" + props.car._id}>Rent</Link>}
      </td>
    </tr>
  );
}

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
    return (
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
  }
}