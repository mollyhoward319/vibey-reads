
export const genreToMusicCategory = {
=======
// This file will be used to map the Spotify music categories to the Google Books API categories

const genreToMusicCategory = {
    // Map book genres to Spotify music categories
    fiction: ['chill', 'indie', 'acoustic'],
    test: "Hello",
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


var chosenCat = document.getElementbyId("blah").textContent;//we grabbed this value from the textContent of the element they chose
var googleParam = chosenCat;
var spotifyParam = genreToMusicCategory[chosenCat][0];//acessing object by key

// Display Data from the Object:
document.getElementById("demo").innerHTML =
"Spotify Variable: "  + spotifyParam;
