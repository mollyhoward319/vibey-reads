// todo: create recommendation cards populated from the API call
import React, { useState } from 'react';
import SelectYourVibe from "../components/createVibes"; // this imports the form for selecting your vibes
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';




function ReccommendedVibes() {
    const [showForm, setShowForm] = 
    return (
        <Container>
            <Row>
                <Col id="books">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="${thumbnail}" />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title> 
                            <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>{categories}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col id="playlists">3 playlists here </Col>
            </Row>
        </Container>
    );
}


// first part of the page happens when a user selects vibes button in the nav bar
// they will first see the createVibes form 
// once they pick the vibes the calls will render cards




// Book Cards: Book Title(hyperlink the preview link), Image, author, description, categories, is/not mature, save button or pass button
// Playlist Cards: Playlist Title (hyperlink to external_url), image, description, categories, number of tracks, is/not mature, save button or pass button

// NOTE. USERS ARE ONLY ABLE TO SELECT 1 BOOK AND 1 PLAYLIST TO SAVE.


// consideration for character count limit in description of books and playlist. A read more button hyperlined to gooogle books