'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.hasMany(models.Order, {foreignKey:'movieId'})
    }
  };
  Movie.init({
    title: DataTypes.STRING,
    releasedate: DataTypes.DATE,
    productor: DataTypes.STRING,
    director: DataTypes.STRING,
    actors: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};