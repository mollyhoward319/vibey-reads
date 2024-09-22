import { Router } from 'express';
import fetch from 'node-fetch';
import { mapSpotifyPlaylistsData, mapSpotifyCategoriesData } from '../../utils/dataMapping'; 
import { fetchPlaylistsByGenres } from '../service/spotifyService.js';

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
        const mappedData = mapSpotifyCategoriesData(data); 
        res.send(mappedData);
    } catch (error) {
        console.error('Error fetching categories from Spotify API:', error);
        res.status(500).json({ error: 'Failed to fetch categories from Spotify API' });
    }
});

// Route to get playlists based on subjects
router.get('/:subjects', async (req, res) => {
    try {
        const subjects = req.params.subjects.split(','); // Split by comma if multiple subjects are sent
        const playlists = await fetchPlaylistsByGenres(subjects);
        const mappedData = mapSpotifyPlaylistsData({ playlists: { items: playlists } });
        res.send(mappedData);
    } catch (error) {
        console.error('Error fetching playlists from Spotify API:', error);
        res.status(500).json({ error: 'Failed to fetch playlists from Spotify API' });
    }
});

export default router;
