import React, { Component } from 'react';
import axios from 'axios';
import { PREMIUM_FEE, REGULAR_FEE } from '../constants';


export default class EditExercise extends Component {

    state = {
        name: '',
        type: '',
        rented: false,
        noOfDays: 1,
        calculatedPrice: 0
    };

    componentDidMount() {
        axios.get('http://localhost:8080/api/' + this.props.match.params.id)
            .then(response => {
                let price = 0
                switch (response.data.type) {
                    case "SUV":
                        price = PREMIUM_FEE; break;
                    case "Sedan":
                        price = REGULAR_FEE; break;
                    case "Hatchback":
                        price = REGULAR_FEE; break;
                }
                this.setState({
                    name: response.data.name,
                    type: response.data.type,
                    rented: Boolean(response.data.rented),
                    calculatedPrice: price
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleCarRent = () => {
        console.log(`Car Rented: ${this.state.name}`);
    }

    handleIncreaseDays = () => {
        let noOfDays = this.state.noOfDays + 1;
        let calculatedPrice = 0;
        switch (this.state.type) {
            case "SUV":
                calculatedPrice = PREMIUM_FEE * noOfDays; break;
            case "Sedan":
                calculatedPrice = noOfDays > 3 ? REGULAR_FEE + (noOfDays - 3) * REGULAR_FEE : REGULAR_FEE; break;
            case "Hatchback":
                calculatedPrice = noOfDays > 5 ? REGULAR_FEE + (noOfDays - 5) * REGULAR_FEE : REGULAR_FEE; break;
        }
        this.setState({ noOfDays, calculatedPrice });
    }

    handleDecreaseDays = () => {
        let noOfDays = this.state.noOfDays - 1;
        noOfDays = noOfDays <= 1 ? 1 : noOfDays;
        let calculatedPrice = 0;
        switch (this.state.type) {
            case "SUV":
                calculatedPrice = PREMIUM_FEE * noOfDays; break;
            case "Sedan":
                calculatedPrice = noOfDays > 3 ? REGULAR_FEE + (noOfDays - 3) * REGULAR_FEE : REGULAR_FEE; break;
            case "Hatchback":
                calculatedPrice = noOfDays > 5 ? REGULAR_FEE + (noOfDays - 5) * REGULAR_FEE : REGULAR_FEE; break;
        }
        this.setState({ noOfDays, calculatedPrice });
    }

    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="card" style={{ "width": "40rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Name: {this.state.name}</h5>
                            <h5 className="card-title">Type: {this.state.type}</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime excepturi impedit voluptatem libero quibusdam illo, veritatis repellendus ullam ratione unde doloremque, magnam error? Quos beatae explicabo animi laborum omnis expedita.</p>
                            <h6>Total Price: {this.state.calculatedPrice}</h6>
                            <button onClick={this.handleIncreaseDays} className="btn btn-primary"> Increase + </button>
                            <p>Days to Rent: {this.state.noOfDays}</p>
                            <button onClick={this.handleDecreaseDays} className="btn btn-primary"> Decrease - </button>
                            <br />
                            <button onClick={this.handleCarRent} className="btn btn-primary"> Rent Car </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}