import React from "react";
import SelectYourVibe from "../pages/createVibes.jsx";  
import RecommendedVibes from "../pages/ReccVibes.jsx";


function callingVibes() {
    const [books, setBooks] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    const handleFormSubmit = (selectedVibes) => {
        if (selectedVibes.length > 2) {
            alert("Please select up to two vibes.");
            return;
        }

        const googleParam = selectedVibes;
        const spotifyParam = selectedVibes.map(vibe => genreToMusicCategory[vibe]);

        fetchGoogleBooks(googleParam);
        fetchSpotifyMusic(spotifyParam);
    };

    const fetchGoogleBooks = (params) => {
        const query = params.join('+');
        fetch(`/api/books?q=${query}`)
            .then(response => response.json())
            .then(data => console.log('Google Books data:', data))
            .catch(error => console.error('Error fetching Google Books data:', error));
    };

    const fetchSpotifyMusic = (params) => {
        const query = params.flat().join(',');
        fetch(`/api/music?q=${query}`)
            .then(response => response.json())
            .then(data => console.log('Spotify data:', data))
            .catch(error => console.error('Error fetching Spotify data:', error));
    };

    return (
        <div>
            <SelectYourVibe onSubmit={handleFormSubmit} /> 
            <RecommendedVibes books={books} playlists={playlists} />
        </div>
    );
}

export default callingVibes;