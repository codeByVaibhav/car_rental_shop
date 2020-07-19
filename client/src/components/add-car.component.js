import React, { Component } from 'react';
import axios from 'axios';

export default class CreateExercise extends Component {

  state = {
    name: '',
    type: 'SUV',
    rented: false
  }

  toggleCheckboxChange = () => {
    this.setState({ rented: !this.state.rented });
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  }

  onChangeType = (e) => {
    this.setState({ type: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const car = {
      name: this.state.name,
      type: this.state.type,
      rented: this.state.rented
    }

    console.log(car);

    axios.post('http://localhost:8080/api/add', car)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    const carTypes = ['SUV', 'Sedan', 'Hatchback'];
    console.log(this.state);
    return (
      <div>
        <h3>Add new Car</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Type: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.type}
              onChange={this.onChangeType}>
              {
                carTypes.map((type) => {
                  return <option
                    key={type}
                    value={type}>{type}
                  </option>;
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label>Name: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>

          <div className="form-group">
            <label>
              Rented: <br />
              <input
                type="checkbox"
                value="Rented"
                checked={this.state.rented}
                onChange={this.toggleCheckboxChange}
              />
            </label>
          </div>

          <div className="form-group">
            <input type="submit" value="Add Car" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}