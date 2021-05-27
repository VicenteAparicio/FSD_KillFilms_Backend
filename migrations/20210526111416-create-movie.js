'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      releasedate: {
        type: Sequelize.DATE
      },
      productor: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      actors: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      genre: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Movies');
  }
};