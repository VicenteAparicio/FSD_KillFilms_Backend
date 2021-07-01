'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {foreignKey:'userId'})
      this.belongsTo(models.Movie, {foreignKey: 'movieId'})
    }
  };
  Order.init({
    movieId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    titleMovie: DataTypes.STRING,
    posterMovie: DataTypes.STRING,
    price: DataTypes.INTEGER,
    rentaldate: DataTypes.DATE,
    returndate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};