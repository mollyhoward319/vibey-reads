import fetch from 'node-fetch';

const genreToMusicCategory = {
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

export async function fetchPlaylistsByGenres(genres) {
  const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
  const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  // Step 1: Get Spotify Access Token
  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(`${spotifyClientId}:${spotifyClientSecret}`).toString('base64'),
    },
    body: 'grant_type=client_credentials',
  });
  
  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;

  const playlists = [];

  // Step 2: Fetch playlists for each genre
  for (const genre of genres) {
    const categories = genreToMusicCategory[genre.toLowerCase()] || [];
    for (const category of categories) {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${category}&type=playlist`, {
        headers: { 'Authorization': `Bearer ${accessToken}` },
      });
      const data = await response.json();
      playlists.push(...data.playlists.items);  // Collect playlists
    }
  }

  return playlists;
}