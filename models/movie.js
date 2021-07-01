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
    genre: DataTypes.STRING,
    overview: DataTypes.TEXT,
    poster_path: DataTypes.STRING,
    isPremium: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};