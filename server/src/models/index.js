import dotenv from "dotenv";
dotenv.config();
import sequelize from "../config/connection.js";
import Vibes from "./vibes.js";
import Music from "./music.js";
import Book from "./bookshelf.js";
import Users from "./userTest.js";


const Viber =  Users(sequelize);
const Books = new Book(sequelize);
const Playlist = new Music(sequelize);
const Vibe = new Vibes(sequelize);

// What/How are each table realated/associated?
// User can have many Vibes
Viber.hasMany(Vibe, {foreignKey: "user_id"});
Vibe.belongsTo(Viber, {foreignKey: "user_id"});

// A Vibe HAS A Book, has a playlist, and a user
Vibe.hasOne(Books, {foreignKey: "book_id"});
Vibe.hasOne(Playlist, {foreignKey: "music_id"});
// Vibe.hasOne(User, {foreignKey: "id"}); may not need

  // Books belongs to many vibes
Books.belongsTo(Vibe, {foreignKey: "book_id"});
// Music belongs to vibes
Playlist.belongsTo(Vibe, {foreignKey: "music_id"});
// User belongs to vibe
Viber.hasOne(Vibe, { foreignKey: "vibe_id"});

export { sequelize, Viber , Books, Playlist, Vibe};

