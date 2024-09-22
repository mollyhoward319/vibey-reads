import fetch from 'node-fetch';
import { mapGoogleBooksData } from '../../utils/dataMapping'; 

export async function fetchBooksByCategory(categories) {
    const apiKey = process.env.GOOGLE_API_KEY;
    const books = [];

    for (const category of categories) {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${category}&key=${apiKey}`);
        const data = await response.json();
        books.push(...data.items);
    }

    return mapGoogleBooksData(books); // Use mapping function
}