const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  password: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Publisher = sequelize.define("publisher", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  name: { type: DataTypes.STRING, unique: true },
});

const Developer = sequelize.define("developer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  name: { type: DataTypes.STRING, unique: true },
});

const Key = sequelize.define("key", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  keyStr: { type: DataTypes.STRING, unique: true },
});

const Game = sequelize.define("game", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  name: { type: DataTypes.STRING, unique: true },
  description: { type: DataTypes.TEXT("long") },
  date: { type: DataTypes.DATE },
  genre: { type: DataTypes.STRING },
  launcher: { type: DataTypes.STRING },
  price: { type: DataTypes.INTEGER },
  cover: { type: DataTypes.STRING },
});

User.hasMany(Key);
Key.belongsTo(User);

Game.hasMany(Key);
Key.belongsTo(Game);

Publisher.hasMany(Game);
Game.belongsTo(Publisher);

Developer.hasMany(Game);
Game.belongsTo(Developer);

module.exports = {
  User,
  Publisher,
  Developer,
  Key,
  Game,
};
