import React, { Component } from 'react';

const CarPricing = (props) => {
    return (

        <div>
            {/* 
            Premium fee: 1000
            Regular fee: 500
            */}
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
                        <td>Price is Premium fee times days rented.</td>
                    </tr>
                    <tr>
                        <td>Sedan</td>
                        <td>Price is Regular fee once for first 3 days, Plus Regular fee times the number of
                        days rented over 3 days.
                        </td>
                    </tr>
                    <tr>
                        <td>Hatchback</td>
                        <td>Price is Regular fee once for first 5 days, Plus Regular fee times the number of
                        days rented over 5 days.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )


}
export default CarPricing;