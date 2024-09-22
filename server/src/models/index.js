import dotenv from "dotenv";
dotenv.config();
import sequelize from "../config/connection.js";
import { Vibes } from "./vibes.js";
import { Music } from "./music.js";
import { Bookshelf } from "./bookshelf.js";
import { UserFactory } from "./user.js";

// this tells the app how the models to each other. this is establishign the structure of our data with th eone to many or many to whatever. example module 14 student mini project
const User = UserFactory(sequelize);

// What/How are each table realated/associated
// User can have many Vibes
// a Vibe belongs to a User
// User.hasMany(Vibes, {
//   foreignKey: "vibe_id",
// });

// Vibes.belongsTo(UserFactory, {
//   foreignKey: "vibe_id",
// });

// A Book belongs to a Vibe
// A Vibe HAS A Book
// Vibes.hasOne(Bookshelf, {
//   foreignKey: "book_id",
// });

// Bookshelf.belongsTo(Vibes, {
//   foreignKey: "book_id",
// });
// // A Playlist belongs to a Vibe
// // A Vibe HAS A Playlist
// Vibes.hasOne(Music, {
//   foreignKey: "music_id",
// });

// Music.belongsTo(Vibes, {
//   foreignKey: "music_id",
// });

// User.hasMany(Vibes, { foreignKey: "assignedUserId" });

export { sequelize, User };

// Finish the models index.js, look for example
