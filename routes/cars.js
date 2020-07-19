const router = require('express').Router();
let Car = require('../models/car.model');

// fetch list of all cars
router.route('/').get((req, res) => {
  Car.find()
    .then(cars => res.json(cars))
    .catch(err => res.status(400).json('Error: ' + err));
});

// fetch one car
router.route('/:id').get((req, res) => {
  Car.findById(req.params.id)
    .then(car => res.json(car))
    .catch(err => res.status(400).json('Error: ' + err));
});

// adds new car
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const type = req.body.type;
  const rented = Boolean(req.body.rented);

  const newCar = new Car({
    name,
    type,
    rented
  });
  console.log(newCar);

  newCar.save()
    .then(() => res.json('Car added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// // update car details
// router.route('/update/:id').post((req, res) => {
//   Car.findById(req.params.id)
//     .then(car => {
//       car.username = req.body.name;
//       car.type = req.body.type;
//       car.rented = Boolean(req.body.rented);

//       car.save()
//         .then(() => res.json('Car updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// // delete car from database
// router.route('/:id').delete((req, res) => {
//   Car.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Car deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;