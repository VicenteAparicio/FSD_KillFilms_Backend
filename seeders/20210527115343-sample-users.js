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
        "password" : "$2b$10$v7EdiKLk1mr8.uil19kio.5jNcVjWXKrc7BmVtRYg3JlETRp4ID9y",
        "isAdmin" : 1
      },
      {
        "name" : "Guillermo",
        "lastname" : "Herráez",
        "email": "guillermo@gmail.com",
        "country" : "Luxemburgo",
        "city" : "Luxemburgo",
        "cp" : "46008",
        "password" : "$2b$10$yg9kbFcANtDcvu.PQ.bOXOHqeto.dCgB5TyUBYURNQWTObbuU8Txa",
        "isAdmin" : 0
      },
      {
        "name" : "Adriana",
        "lastname" : "Fayos",
        "email": "adriana@gmail.com",
        "country" : "France",
        "city" : "Paris",
        "cp" : "15032",
        "password" : "$2b$10$yeIP.csXTkx7Bsq.0HL71Obz03gtvAT8e84/eRuaH0t7LQItTTRrS",
        "isAdmin" : 0
      },
      {
        "name" : "Juanfe",
        "lastname" : "Ferrán",
        "email": "juanfe@gmail.com",
        "country" : "Venezuela",
        "city" : "Caracas",
        "cp" : "6003",
        "password" : "$2b$10$ymybt5EZtxyFgyd1J/sMEO7WggbuJ.FWpd43rVs2bjYdNAOb35PpG",
        "isAdmin" : 0
      },
      {
        "name" : "Adrián",
        "lastname" : "Furlan",
        "email": "adrianfur@gmail.com",
        "country" : "Italia",
        "city" : "Venezia",
        "cp" : "27015",
        "password" : "$2b$10$QjGBokEDXr4xlxgKW3yetO9LGxed8IutZet3fd1KBGPghYW1jyQN6",
        "isAdmin" : 1
      },
      {
        "name": "Mariana",
        "lastname": "Capresse",
        "email": "marianacapresse@gmail.com",
        "country": "France",
        "city": "Paris",
        "cp": 46023,
        "password": "$2b$10$et24/5vdSlZfTV2fJAsAgO1znY6/orH0oMM/U/SDAWpFzLX4is..K",
        "isAdmin" : false
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
