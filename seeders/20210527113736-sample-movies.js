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
          "actors" : "Humphrey Bogart",
          "rating" : "7.4",
          "genre" : "Adventure"
        },
        {
          "title" : "Casablanca",
          "releasedate" : "1942-11-26",
          "productor": "Hall Wallis",
          "director" : "Michael Curtiz",
          "actors" : "Humphrey Bogart",
          "rating" : "8.1",
          "genre" : "Drama"
        },
        {
          "title" : "The Philadelphia Story",
          "releasedate" : "1949-04-04",
          "productor": "Joseph L. Mankiewicz",
          "director" : "George Cukor",
          "actors" : "Gary Grant",
          "rating" : "7.7",
          "genre" : "Comedy"
        },
        {
          "title" : "The Great Dictator",
          "releasedate" : "1940-05-05",
          "productor": "Charles Chaplin",
          "director" : "Charles Chaplin",
          "actors" : "Charles Chaplin",
          "rating" : "8",
          "genre" : "Comedy"
        },
        {
          "title" : "Lost Horizon",
          "releasedate" : "1937-03-03",
          "productor": "Columbia Pictures",
          "director" : "Frank Capra",
          "actors" : "Ronald Colman",
          "rating" : "7",
          "genre" : "Adventure"
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
 