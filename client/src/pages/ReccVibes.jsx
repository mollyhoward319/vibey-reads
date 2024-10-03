// this file is the cards that render the recommendations for the user after we get a a response from the backend with Spotify and Google
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';

function ReccommendedVibes() {

const { music, books } = useParams();

    useEffect(() => {
        console.log("Books:", books);
        console.log("Music:", music);
    }, []);

    return(
        <Container>
            <h1>ReccVibes Container</h1>
            {/* <Row>
                <Col>
                    <SelectYourVibe />
                </Col>
            </Row>
            <Row>
                <Col>
                    {books.map((book) => (
                        <BookCard
                            key={book.id}
                            title={book.title}
                            author={book.author}
                            description={book.description}
                            categories={book.categories}
                            thumbnail={book.thumbnail}
                        />
                    ))}
                </Col>
                <Col>
                    {playlists.map((playlist) => (
                        <PlaylistCard
                            key={playlist.id}
                            title={playlist.title}
                            description={playlist.description}
                            categories={playlist.categories}
                            external_url={playlist.external_url}
                        />
                    ))}
                </Col>
            </Row> */}
        </Container>
    );

}

export default ReccommendedVibes;
// first part of the page happens when a user selects vibes button in the nav bar
// they will first see the createVibes form 
// once they pick the vibes the calls will render cards
// Book Cards: Book Title(hyperlink the preview link), Image, author, description, categories, is/not mature, save button or pass button
// Playlist Cards: Playlist Title (hyperlink to external_url), image, description, categories, number of tracks, is/not mature, save button or pass button
// NOTE. USERS ARE ONLY ABLE TO SELECT 1 BOOK AND 1 PLAYLIST TO SAVE.
// consideration for character count limit in description of books and playlist. A read more button hyperlined to gooogle books