export function mapGoogleBooksData(data) {

    return data.items.map(item => ({

        book_id: item.id || null, // Assuming 'id' from Google Books can map to 'book_id'
        title: item.volumeInfo.title || null,
        author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : null,
        categories: item.volumeInfo.categories ? item.volumeInfo.categories.join(', ') : null, 
        // .join(', ') convert this array into a single string that lists the authors separated by commas
        description: item.volumeInfo.description || null,
        language: item.volumeInfo.language || null,
        maturity_rating: item.volumeInfo.maturityRating === 'MATURE', // Set to true if 'MATURE', otherwise false
        preview_link: item.volumeInfo.previewLink || null,
        thumbnail: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : null,
        industry_identifiers: item.volumeInfo.industryIdentifiers ? 
            item.volumeInfo.industryIdentifiers.map(id => id.identifier).join(', ') : null,
    }));
}

export function mapSpotifyPlaylistsData(data) {
    return data.playlists.items.map(item => ({
        name: item.name || null, 
        description: item.description || null, 
        category: item.category || null, 
        playlist_uri: item.uri || null, 
        total_tracks: item.tracks.total || null, 
        external_url: item.external_urls.spotify || null, 
        image_url: item.images.length > 0 ? item.images[0].url : null,
    }));
}

// Mapping function for Spotify Categories
export function mapSpotifyCategoriesData(data) {
    return data.categories.items.map(item => ({
        id: item.id || null, 
        name: item.name || null, 
    }));
}