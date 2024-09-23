import React from "react";
import SelectYourVibe from "../pages/createVibes.jsx";  
import genreToMusicCategory from "./music2booksparams.js";

function callingVibes() {
    const handleFormSubmit = (selectedVibes) => {
        if (selectedVibes.length !== 2) {
            alert("Please select exactly two vibes.");
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
        fetch(`/api/music?q=${queary}`)
            .then(response => response.json())
            .then(data => console.log('Spotify data:', data))
            .catch(error => console.error('Error fetching Spotify data:', error));
    };

    return (
        <div>
            <SelectYourVibe onSubmit={handleFormSubmit} /> 
        </div>
    );
}

export default callingVibes;