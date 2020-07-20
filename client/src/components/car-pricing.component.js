import React, { Component } from 'react';
import {
    REGULAR_FEE,
    PREMIUM_FEE,
    SUV_DESC,
    SEDAN_DESC,
    HATCHBACK_DESC
} from '../constants';

const CarPricing = (props) => {
    return (
        <div style={{ "width": "auto" }}>
            <h3>Fees</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Type</th>
                        <th>Fee</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Regular</td>
                        <td>{REGULAR_FEE} Rs</td>
                    </tr>
                    <tr>
                        <td>Premium</td>
                        <td>{PREMIUM_FEE} Rs</td>
                    </tr>
                </tbody>
            </table>

            <h3>Pricing Model</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Type</th>
                        <th>Pricing Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>SUV</td>
                        <td>{SUV_DESC}</td>
                    </tr>
                    <tr>
                        <td>Sedan</td>
                        <td>{SEDAN_DESC}</td>
                    </tr>
                    <tr>
                        <td>Hatchback</td>
                        <td>{HATCHBACK_DESC}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default CarPricing;