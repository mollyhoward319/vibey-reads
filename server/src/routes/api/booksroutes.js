import { Router } from 'express';
import { fetchBooksByCategory } from '../service/bookService.js';
import { mapGoogleBooksData } from '../../utils/dataMapping';

const router = Router();

router.get("/health", (req, res) => {
  res.status(200).send("Hello from the API Route");
});

router.get('/:subjects', async (req, res) => {
    try {
        const subjects = req.params.subjects.split(','); // Assuming subjects are comma-separated
        const books = await fetchBooksByCategory(subjects);
        res.json(books); // Respond with mapped data
    } catch (error) {
        console.error('Error fetching data from Google Books API:', error);
        res.status(500).json({ error: 'Failed to fetch data from Google Books API' });
    }
});

export default router;