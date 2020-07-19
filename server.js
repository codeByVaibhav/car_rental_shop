const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config();
const carRoutes = require("./routes/cars");

const app = express();
// HTTP request logger
app.use(morgan('tiny'));
// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// server port
const port = process.env.PORT || 8080;
// connect to mongoDB database using mongoose
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
});
mongoose.connection.on('connected', () => console.log('Database connected.'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
// Handel Http routes
app.use('/api', carRoutes);

// Start listening on port
app.listen(port, console.log(`Server started at http://localhost:${port}`));