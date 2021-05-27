'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Movies', [
        {
          "title" : "The African Queen",
          "releasedate" : "1951-01-01",
          "productor": "Sam Spiegel",
          "director" : "John Huston",
          "actors" : "Humphrey Bogart"
        },
        {
          "title" : "Casablanca",
          "releasedate" : "1942-02-03",
          "productor": "Hall Wallis",
          "director" : "Michael Curtiz",
          "actors" : "Humphrey Bogart"
        },
        {
          "title" : "The Philadelphia Story",
          "releasedate" : "1949-04-04",
          "productor": "Joseph L. Mankiewicz",
          "director" : "George Cukor",
          "actors" : "Gary Grant"
        },
        {
          "title" : "The Great Dictator",
          "releasedate" : "1940-05-05",
          "productor": "Charles Chaplin",
          "director" : "Charles Chaplin",
          "actors" : "Charles Chaplin"
        },
        {
          "title" : "Bend of the River",
          "releasedate" : "1952-06-06",
          "productor": "Universal Pictures",
          "director" : "Anthony Mann",
          "actors" : "James Stewart"
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
