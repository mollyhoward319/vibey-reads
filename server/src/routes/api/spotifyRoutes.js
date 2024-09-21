import { Router } from 'express';
import fetch from 'node-fetch';
import { mapSpotifyPlaylistsData, mapSpotifyCategoriesData } from '../../utils/dataMapping'; // Import the mapping functions

const router = Router();

// Health check route
router.get('/health', (req, res) => {
    res.status(200).send('Hello from the API Route');
});

// Route to get Spotify categories
router.get('/categories', async (req, res) => {
    try {
        const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
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

        const data = await response.json();
        const mappedData = mapSpotifyCategoriesData(data); // Ensure this function correctly maps category data
        res.send(mappedData);
    } catch (error) {
        console.error('Error fetching categories from Spotify API:', error);
        res.status(500).json({ error: 'Failed to fetch categories from Spotify API' });
    }
});

// Route to get playlists based on subjects
router.get('/:subjects', async (req, res) => {
    try {
        const subjects = req.params.subjects;

        const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
            },
            body: 'grant_type=client_credentials'
        });

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        const response = await fetch(`https://api.spotify.com/v1/browse/categories/${subjects}/playlists`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        const data = await response.json();
        const mappedData = mapSpotifyPlaylistsData(data); // should work if playlist data includes the correct category
        res.send(mappedData);
    } catch (error) {
        console.error('Error fetching data from Spotify API:', error);
        res.status(500).json({ error: 'Failed to fetch playlists from Spotify API' });
    }
});

export {router as musicRouter};