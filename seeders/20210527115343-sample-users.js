'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [
      {
        "name" : "Vicente",
        "lastname" : "Api",
        "email": "vicente@gmail.com",
        "country" : "Spain",
        "city" : "Valencia",
        "cp" : "46013",
        "password" : "bootcamp",
        "isAdmin" : 1
      },
      {
        "name" : "Guillermo",
        "lastname" : "Herráez",
        "email": "guillermo@gmail.com",
        "country" : "Luxemburgo",
        "city" : "Luxemburgo",
        "cp" : "46008",
        "password" : "bootcamp2",
        "isAdmin" : 0
      },
      {
        "name" : "Adriana",
        "lastname" : "Fayos",
        "email": "adriana@gmail.com",
        "country" : "France",
        "city" : "Paris",
        "cp" : "15032",
        "password" : "bootcamp3",
        "isAdmin" : 0
      },
      {
        "name" : "Juanfe",
        "lastname" : "Ferrán",
        "email": "juanfe@gmail.com",
        "country" : "Venezuela",
        "city" : "Caracas",
        "cp" : "6003",
        "password" : "bootcamp4",
        "isAdmin" : 0
      },
      {
        "name" : "Adrián",
        "lastname" : "Furlan",
        "email": "adrianfur@gmail.com",
        "country" : "Italia",
        "city" : "Venezia",
        "cp" : "27015",
        "password" : "bootcamp5",
        "isAdmin" : 1
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
