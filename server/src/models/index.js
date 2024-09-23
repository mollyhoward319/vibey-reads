import dotenv from "dotenv";
dotenv.config();
import sequelize from "../config/connection.js";
import { Vibes } from "./vibes.js";
import { Music } from "./music.js";
import { Bookshelf } from "./bookshelf.js";
import { UserFactory } from "./user.js";

const User = UserFactory(sequelize);
const Books = Bookshelf(sequelize);
const Playlist = Music(sequelize);
// const Vibe = Vibes(sequelize);

// What/How are each table realated/associated?
// User can have many Vibes
// User.hasMany(Vibe, {foreignKey: "user_id",});
// Vibe.belongsTo(User, {foreignKey: "user_id",});

// // A Vibe HAS A Book, has a playlist, and a user
// Vibe.hasOne(Books, {foreignKey: "book_id",});
// Vibe.hasOne(Playlist, {foreignKey: "music_id"});
// // Vibe.hasOne(User, {foreignKey: "id"}); may not need

//   // Books belongs to many vibes
// Books.belongsTo(Vibe, {foreignKey: "book_id",});
// // Music belongs to vibes
// Playlist.belongsTo(Vibe, {foreignKey: "music_id",});
// // User belongs to vibe
// User.hasOne(Vibe, { foreignKey: "vibe_id" });

// export { sequelize, User , Books, Playlist, Vibe};
export { sequelize, User };
