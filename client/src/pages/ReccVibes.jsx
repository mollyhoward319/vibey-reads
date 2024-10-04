// this file is the cards that render the recommendations for the user after we get a a response from the backend with Spotify and Google
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import Header from '../components/Header';

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
        if (!showForm) {
            fetch('/api/music/categories/fantasy')
                .then(response => {
                    console.log("Res: ", response)
                    return response.json()
                })
                .then(data => {
                    console.log("API: ", data);
                    setPlaylists(data);
                })
                .catch(error => console.error('Error fetching playlists:', error));
        }
    }, [showForm]);

    const handleVibeSubmit = (vibes) => {
        setShowForm(false);
    };

    return (
        <>
        
            {showForm ? (
                <SelectYourVibe onSubmit={handleVibeSubmit} />
            ) : (
               <div>
               <Header /> 
      
                <Container>
                
                <Row>
                    <Col xs={12} style={{ padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                        
               
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={12} style={{ padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">Select Genre</Dropdown.Toggle>
                            <Dropdown.Menu>
                                { playlists.map((playlist, index) => (
                                    <Dropdown.Item id={playlist.id} key={index}>{playlist.name}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={4} style={{ padding: '12px' }}>
                        
                    </Col>
                    <Col xs={12} md={6} lg={4} style={{ padding: '10px' }}>
                        
                    </Col>
                    <Col xs={12} md={6} lg={4} style={{ padding: '12px' }}>
                
                    </Col>
                </Row>
                <Row>
                    <Col id="books">
                        {playlists.map((playlist, index) => (
                            <Card key={index} style={{ width: '18rem', padding: '10px' }}>
                                <Card.Img variant="top" src={playlist.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{playlist.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{playlist.author}</Card.Subtitle>
                                    <Card.Text>{playlist.description}</Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>{playlist.categories}</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        ))}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                       
                    </Col>
                </Row>
            </Container>
            </div>
        )}
    </>
);
};

export default ReccVibes;