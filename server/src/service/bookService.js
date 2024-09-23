import fetch from 'node-fetch';
import { mapGoogleBooksData } from '../../utils/dataMapping';

export async function fetchBooksByCategory(categories) {
    const apiKey = process.env.GOOGLE_API_KEY;
    const books = [];

    for (const category of categories) {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${category}&key=${apiKey}`);
        const data = await response.json();
        if (data.items) {
            books.push(...data.items); // Only push items if they exist
        }
    }

    return mapGoogleBooksData(books); // Use mapping function to transform data
}



// Separation of Concerns: The service file is responsible for the business logic of fetching and processing book data, while the routes file defines the API endpoints and handles the HTTP interactions.