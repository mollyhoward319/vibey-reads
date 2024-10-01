import { Router } from "express";
import fetch from "node-fetch";
import {
  mapSpotifyPlaylistsData,
  mapSpotifyCategoriesData,
} from "../../utils/dataMapping.js"; // Import the mapping functions

const router = Router();

// Health check route
router.get("/health", (req, res) => {
  res.status(200).send("Hello from the API Route");
});

// Route to get Spotify categories
router.get('/categories/:category', async (req, res) => {
    console.log("Hit Spotify Route");
    try {
        const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_SECRET_ID}`).toString('base64')}`
            },
            body: 'grant_type=client_credentials'
        });

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        const response = await fetch('https://api.spotify.com/v1/browse/categories', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        const results = await response.json();
        //console.log("Spotify request: ", results.categories);

        const categoryData = results.categories.items;
        console.log("Category Data: ", categoryData);

        const cat = req.params.category;

        // const data = await fetchPlaylistsByGenres(cat);

        const mappedData = mapSpotifyCategoriesData(results);
        console.log("Fetch Playlist: ", mappedData);
        res.send(mappedData);
    } catch (error) {
        console.error('Error fetching categories from Spotify API:', error);
        res.status(500).json({ error: 'Failed to fetch categories from Spotify API' });
    }
});

// Route to get playlists based on genres
// router.get('/playlists', async (req, res) => {
//     try {
//         const { genres } = req.query; // Get genres from query parameters
//         const playlists = await fetchPlaylistsByGenres(genres.split(',')); // Fetch playlists
//         res.json(playlists);
//     } catch (error) {
//         console.error('Error fetching playlists from Spotify API:', error);
//         res.status(500).json({ error: 'Failed to fetch playlists from Spotify API' });
//     }
// });

export { router as musicRouter };
