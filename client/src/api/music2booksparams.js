const fetch = require('node-fetch');
require('dotenv').config();

const genreToMusicCategory = {
    // Map book genres to Spotify music categories
    // value on left in blue: array is the pair to the value
    fiction: ['chill', 'indie', 'acoustic'],
    scienceFiction: ['synthwave', 'electronic', 'futuristic'],
    fantasy: ['epic', 'adventure', 'classical'],
    romance: ['love', 'mood', 'pop ballads'],
    thriller: ['suspense', 'dark', 'electronic'],
    mystery: ['tension', 'minimalist', 'cinematic'],
    horror: ['spooky', 'dark ambient', 'haunted'],
    biographyAndAutobiography: ['storytelling', 'jazz', 'soul'],
    historical: ['classical', 'instrumental', 'folk'],
    selfHelp: ['motivation', 'wellness', 'relaxation'],
    religion: ['gospel', 'spiritual', 'meditation'],
    childrensBooks: ['kids', 'family', 'sing-along'],
    youngAdult: ['pop', 'indie pop', 'vibes'],
    tragedy: ['melancholy', 'sad songs', 'piano'],
  };
  
// var chosenCategory = here is the get from the front user selection form. figure out what that element is in react.
var googleParam = chosenCategory;
var spotifyParam = genreToMusicCategory[chosenCategory][in here goes all 3, figure out how];

  // async function fetchPlaylistsByGenres(bookGenres) {
  //   const categories = bookGenres.flatMap(genre => genreToMusicCategory[genre.toLowerCase().replace(/\s+/g, '')] || []);
    
  //   const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
  // //   const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  // }

  // this is the logic that the will result from someone selecting certain buttons. This will establish the params we input into the api endpoints for both.
  // todo finish this