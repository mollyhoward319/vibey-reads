import { Sequelize, DataTypes, Model } from 'sequelize'; 

export function Bookshelf(sequelize) {
    class Book extends Model {} 

    Book.init(
        {
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
            // ISBN
            industry_identifiers: {
                type: DataTypes.STRING, 
            },
        },
        {
            sequelize,
            timestamps: false,
            underscored: true,
            freezeTableName: true,
        }
    );
    return Book;
}