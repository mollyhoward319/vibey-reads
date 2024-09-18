import { Sequelize, DataTypes, Model } from 'sequelize'; 

export function Vibes(sequelize) {
    class Vibe extends Model {} 

    Vibe.init(
        {
            vibe_id: {
                type: DataTypes.INTEGER, 
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: DataTypes.STRING,
                references: {
                    model: Users(sequelize), // Reference the User model
                    key: '', // The user id field in Users
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            isbn: {
                type: DataTypes.STRING,
                references: {
                    model: Bookshelf(sequelize), // Reference the Bookshelf model
                    key: 'industry_identifiers', // The ISBN field in Bookshelf
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            playlist_uri: {
                type: DataTypes.STRING,
                references: {
                    model: Music(sequelize), // Reference the Playlist model now
                    key: 'playlist_uri', 
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            
        },
        {
            sequelize,
            timestamps: false,
            underscored: true,
            freezeTableName: true,
        }
    );
    return Vibe;
}
