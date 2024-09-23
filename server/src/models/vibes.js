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
                    key: 'id', // The user id field in Users
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            book_id: {
                type: DataTypes.STRING,
                references: {
                    model: Bookshelf(sequelize), // Reference the Bookshelf model
                    key: 'book_id', 
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            music_id: {
                type: DataTypes.STRING,
                references: {
                    model: Music(sequelize), // Reference the Playlist model now
                    key: 'music_id', 
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            }
            
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

