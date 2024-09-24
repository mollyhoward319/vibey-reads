import sequelize from "../config/connection.js";
import VibesFactory from "./vibes.js";
import MusicFactory from "./music.js";
import BookFactory from "./bookshelf.js";
import UserFactory from "./user.js";


const Viber = UserFactory(sequelize);
console.log ("-------", Viber);
// const Viber = new User;
const Books = BookFactory(sequelize);
const Playlist = MusicFactory(sequelize);
const Vibe = VibesFactory(sequelize);

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

export {Viber , Books, Playlist, Vibe};

