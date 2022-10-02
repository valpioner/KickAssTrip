const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Load models
const User = require("./models/User");
const Trip = require("./models/Trip");

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, "utf-8")
);
const trips = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/trips.json`, "utf-8")
);

// Import into DB
const importData = async () => {
  try {
    await User.create(users);
    await Trip.create(trips);

    console.log("Data Imported...".green.inverse);

    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await User.deleteMany();
    await Trip.deleteMany();

    console.log("Data Destroyed...".red.inverse);

    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
