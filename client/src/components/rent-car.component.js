import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import axios from 'axios';
import {
    REGULAR_FEE,
    PREMIUM_FEE,
    SUV_DESC,
    SEDAN_DESC,
    HATCHBACK_DESC
} from '../constants';

export default class RentCar extends Component {

    state = {
        name: '',
        type: '',
        desc: '',
        noOfDays: 1,
        calculatedPrice: 0,
        showPurchasedCard: false
    };

    componentDidMount() {
        axios.get('/api/' + this.props.match.params.id)
            .then(response => {
                let price = 0;
                let desc = '';
                switch (response.data.type) {
                    case "SUV":
                        price = PREMIUM_FEE; desc = SUV_DESC; break;
                    case "Sedan":
                        price = REGULAR_FEE; desc = SEDAN_DESC; break;
                    case "Hatchback":
                        price = REGULAR_FEE; desc = HATCHBACK_DESC; break;
                }
                this.setState({
                    name: response.data.name,
                    type: response.data.type,
                    calculatedPrice: price,
                    desc: desc
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleCarRent = () => {
        console.log(`Car Rented: ${this.state.name}`);
        this.setState({ showPurchasedCard: !this.state.showPurchasedCard });
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
            <div className="row">
                <div className="col-6">
                    <div className="card card-body" style={{ "width": "26rem" }}>
                        <h5 className="card-title">Car Name: {this.state.name} </h5>
                        <h5 className="card-title">Car Type: {this.state.type} </h5>
                        <p className="card-title">Car Pricing: {this.state.desc} </p>
                        <h6>Total Price: {this.state.calculatedPrice} Rs</h6>
                        <h6>Days to Rent: {this.state.noOfDays}</h6>
                        <button onClick={this.handleIncreaseDays} className="btn btn-primary ml-4 mr-4 mt-4 mb-2"> + Increase No of Days </button>
                        <button onClick={this.handleDecreaseDays} className="btn btn-primary ml-4 mr-4"> - Decrease of Days </button>
                        <br />
                        <button onClick={this.handleCarRent} className="btn btn-outline-primary align-self-end"> Rent Car </button>

                        <Modal show={this.state.showPurchasedCard}>
                            <Modal.Header>
                                <h4>Rent Confirmed</h4>
                            </Modal.Header>
                            <Modal.Body>
                                <h6>Car Name: {this.state.name}</h6>
                                <h6>Car Type: {this.state.type}</h6>
                                <h6>Rented for: {this.state.noOfDays} Days</h6>
                                <h6>Total price of rent: {this.state.calculatedPrice} Rs</h6>
                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={this.handleCarRent} className="btn btn-outline-primary"> Close </button>
                            </Modal.Footer>
                        </Modal>

                    </div>
                </div>
            </div>
        );
    }
}