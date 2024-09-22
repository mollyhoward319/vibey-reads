import fetch from 'node-fetch';

export async function fetchBooksByCategory(categories) {
  const apiKey = process.env.GOOGLE_API_KEY;
  const books = [];

  for (const category of categories) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${category}&key=${apiKey}`);
    const data = await response.json();
    books.push(...data.items);  // Collect book details
  }

  return books.map(book => ({
    title: book.volumeInfo.title,
    author: book.volumeInfo.authors?.join(', '),
    categories: book.volumeInfo.categories?.join(', '),
    description: book.volumeInfo.description,
    language: book.volumeInfo.language,
    maturity_rating: book.volumeInfo.maturityRating === 'MATURE',
    preview_link: book.volumeInfo.previewLink,
    thumbnail: book.volumeInfo.imageLinks?.thumbnail,
    industry_identifiers: book.volumeInfo.industryIdentifiers?.map(id => id.identifier).join(', '),
  }));
}