import React, { Component } from 'react';
import axios from 'axios';

export default class AddCar extends Component {

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

    axios.post('/api/add', car)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    const carTypes = ['SUV', 'Sedan', 'Hatchback'];
    return (
      <div className="row">
        <div className="col-6" >
          <div className="card card-body" style={{ "width": "26rem" }}>
            <h3>Add new Car</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label> <h6>Car Type:</h6> </label>
                <select ref="userInput"
                  required
                  className="form-control"
                  value={this.state.type}
                  onChange={this.onChangeType}>
                  {
                    carTypes.map((type) => {
                      return (<option
                        key={type}
                        value={type}>{type}
                      </option>);
                    })
                  }
                </select>
              </div>
              <div className="form-group">
                <label><h6>Car Name:</h6></label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                  placeholder="Car name"
                />
              </div>

              <div className="form-group">
                <label>
                  <h6>Rented:
                  <input
                      className="ml-1"
                      type="checkbox"
                      value="Rented"
                      checked={this.state.rented}
                      onChange={this.toggleCheckboxChange}
                    />
                  </h6>
                </label>
              </div>

              <div className="form-group">
                <input type="submit" value="Add Car" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}