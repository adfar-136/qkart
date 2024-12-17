// CRIO_SOLUTION_START_MODULE_UNDERSTANDING_BASICS
// CRIO_SOLUTION_END_MODULE_UNDERSTANDING_BASICS
const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
// CRIO_SOLUTION_START_MODULE_UNDERSTANDING_BASICS
// Tries to create a MongoDB connection and on success starts the Node server
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
    console.log("Connected to MongoDB");
    server = app.listen(config.port, () => {
        console.log(`Listening to port ${config.port}`);
    });
});
// CRIO_SOLUTION_END_MODULE_UNDERSTANDING_BASICS