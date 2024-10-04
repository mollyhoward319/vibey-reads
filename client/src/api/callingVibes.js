// import React, { useEffect } from "react";
// // import RecommendedVibes from "../pages/ReccVibes.jsx";
// import SelectYourVibe from "../components/createVibes.jsx";

// // callingvibes is doing the form handling  after the user selects one or two bookgenre/vibes.
// function callingVibes() {
//     // this is setting the state for books and playlists. Which right now is an empty arary bc there is not data to pass through. the array will not be empty when data is brought from the backend
//     const [books, setBooks] = useState([]);
//     const [playlists, setPlaylists] = useState([]);

//     const selectedVibes = Romance;


//     // me trying to hard code a googleparam to test out route.
//     const googleParam = selectedVibes;

//     // this const might need to be done in the backend through a fetch or something
//     // const spotifyParam = selectedVibes.map(googleParam);
//     fetchGoogleBooks(googleParam);
//     // fetchSpotifyMusic(spotifyParam);
// };

// const fetchGoogleBooks = (params) => {
//     const query = params.join('+');
//     fetch(`/api/books?q=${query}`)
//         .then(response => response.json())
//         .then(data => console.log('Google Books data:', data))
//         .catch(error => console.error('Error fetching Google Books data:', error));
// };

// // const fetchSpotifyMusic = (params) => {
// //     const query = params.flat().join(',');
// //     fetch(`/api/music?q=${query}`)
// //         .then(response => response.json())
// //         .then(data => console.log('Spotify data:', data))
// //         .catch(error => console.error('Error fetching Spotify data:', error));
// // };

// return (
//     <div>
//         <SelectYourVibe onSubmit={handleFormSubmit} />
//         {/* <RecommendedVibes books={books} playlists={playlists} /> */}
//     </div>
// );
// }

// export default callingVibes;