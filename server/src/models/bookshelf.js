const { Sequelize, DataTypes } = require('sequelize');

let Book;

function Bookshelf(sequelize) {
    Book = sequelize.define('Book', {
        book_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
        categories: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
        language: {
            type: DataTypes.STRING,
        },
        maturity_rating: {
            type: DataTypes.BOOLEAN,
        },
        preview_link: {
            type: DataTypes.STRING,
        },
        thumbnail: {
            type: DataTypes.STRING,
        },
        industry_identifiers: {
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    });

    return Book;
}

module.exports = { Bookshelf, Book };
