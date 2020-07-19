const mongoose = require('mongoose');
const Car = require('./models/car.model');
require('dotenv').config();

const carTypes = ['SUV', 'Sedan', 'Hatchback'];

async function generateNewCars(noOfCars) {
    for (let i = 0; i < noOfCars; i++) {
        let car = new Car({
            name: `Car${i + 1}`,
            type: carTypes[Math.round(Math.random() * 2)],
            rented: Boolean(Math.round(Math.random()))
        });
        await car.save();
        console.log(`Car: ${i + 1} saved`);
    }
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        await Car.collection.drop();
        generateNewCars(10)
            .then(() => mongoose.disconnect())
            .catch(err => console.log(`Error: ${err}`));
    })
    .catch(err => console.log(`Error: ${err}`));



