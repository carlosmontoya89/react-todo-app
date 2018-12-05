const mongoose = require("mongoose");

//Connecting to the database
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;
let connection = mongoose.connection;

//Check for errors
connection.on('error', (error) => {
  if (error) {
    console.log(error);
  }
});

//Check for connections
connection.once('open', () => console.log(`connection successful!`));

module.exports = connection;