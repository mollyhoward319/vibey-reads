import sequelize from "../config/connection";
import { Vibes } from "./vibes";
import { Music } from "./music";
import { Bookshelf } from "./bookshelf";
import { UserFactory } from './user';

// this tells the app how the models to each other. this is establishign the structure of our data with th eone to many or many to whatever. example module 14 student mini project

// What/How are each table realated/associated
// User can have many Vibes
// a Vibe belongs to a User   
User.hasMany(Vibes, {
    foreignKey: 'vibe_id'
});

Vibes.belongsTo(UserFactory, {
    foreignKey: 'vibe_id'
});

// A Book belongs to a Vibe
// A Vibe HAS A Book
Vibes.hasOne(Bookshelf, {
    foreignKey: 'book_id'
});

Bookshelf.belongsTo(Vibes, {
    foreignKey: 'book_id'
});
// A Playlist belongs to a Vibe
// A Vibe HAS A Playlist
Vibes.hasOne(Music, {
    foreignKey: 'music_id'
});

Music.belongsTo(Vibes, {
    foreignKey: 'music_id'
});

export {sequelize};


// Finish the models index.js, look for example