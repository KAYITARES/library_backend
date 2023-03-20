const express = require("express");
// const bodyParser = require("body-parser");
const { sequelize, User, Genre } = require("./models");
// const { Sequelize, DataTypes } = require("sequelize");
// const User = require("./models/user");

const app = express();
app.use(express.json());

const port = 3030;
// const sequelize = new Sequelize(
//   "postgres://cynthia:cycy~3696@localhost:5432/libraryandela"
// );
// const User = sequelize.define(
//   "User",
//   {
//     firstName: { type: DataTypes.STRING, allowNull: false },
//     lastName: { type: DataTypes.STRING, allowNull: false },
//     email: { type: DataTypes.STRING, allowNull: false, unique: true },
//   },
//   { freezeTableName: true }
// );
app.post("/user", async (req, res) => {
  try {
    const createUser = await User.create(req.body);

    return res
      .status(201)
      .json({ message: `User Succesfuly Created!`, data: createUser });
  } catch (error) {
    console.log(error);
  }
});
app.get("/user", async (req, res) => {
  try {
    const getAllUsers = await User.findAll();
    if (!getAllUsers) {
      return res.status(404).json({
        message: `No User found`,
      });
    } else {
      return res.status(200).json({
        message: `${getAllUsers.length} users found successfuly`,
        data: getAllUsers,
      });
    }
  } catch (error) {
    console.log(error);
  }
});
app.post("/book", async (req, res) => {
  try {
    const createBook = await Book.create(req.body);
    return res
      .status(201)
      .json({ message: `Book successfuly createed`, data: createBook });
  } catch (error) {
    console.log(error);
  }
});
app.post("/genre", async (req, res) => {
  try {
    const createCategory = await Genre.create(req.body);

    return res
      .status(201)
      .json({ message: `Category Succesfuly Created!`, data: createCategory });
  } catch (error) {
    console.log(error);
  }
});
app.get("/genre", async (req, res) => {
  try {
    const getAllCategory = await Genre.findAll();

    return res.status(200).json({
      message: `${getAllCategory.length} Category Successfully Retrieved!`,
      data: getAllCategory,
    });
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, () => {
  console.log(`the port is running on ${port}`);
  sequelize.authenticate();
  console.log(`Database is successfuly connected`);
});
