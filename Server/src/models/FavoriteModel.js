const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorites",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primarykey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("Female", "Male", "Genderless", "Unknown"),
        allowNull: false,
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
