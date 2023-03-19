const express = require("express");
// const bodyParser = require("body-parser");
const { sequelize, User } = require("./models");
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

app.listen(port, () => {
  console.log(`the port is running on ${port}`);
  sequelize.authenticate();
  console.log(`Database is successfuly connected`);
});
