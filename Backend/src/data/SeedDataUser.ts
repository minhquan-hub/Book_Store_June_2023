const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const User = require("../models");

dotenv.config({ path: "../.env" });
const uri = process.env.MONGODB_URL;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

async function hashPassword(password) {
  const hash = await bcrypt.hash(password, 10).then((password) => {
    return password;
  });

  return hash;
}

const seedUser = [
  {
    email: "minhquan1@gmail.com",
    role: "Admin",
    password: hashPassword("quan1"),
    phone: "0924721184",
  },
  {
    email: "minhquan2@gmail.com",
    role: "User",
    password: hashPassword("quan2"),
    phone: "0924721185",
  },
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(seedUser);
};

seedDB().then(() => {
  mongoose.disconnect();
});
