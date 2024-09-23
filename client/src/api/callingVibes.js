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

// unifinished 
}