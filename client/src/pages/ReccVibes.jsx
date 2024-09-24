import React, { useState, useEffect } from 'react';
import SelectYourVibe from "../components/createVibes"; // this imports the form for selecting your vibes
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ChooseVibeImage from '../assets/ChooseVibe.png';
import BookReccs from '../assets/BookReccs.png';
import Header from '../components/Header';

function ReccVibes() {
    const [showForm, setShowForm] = useState(false); //change this to false when you actually have data running to it
    const [playlists, setPlaylists] = useState([]);

    // Fetch playlist data if we aren't showing the form
    useEffect(() => {
        if (!showForm) {
            fetch('/api/music/categories/fantasy')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
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
            <br />
            {showForm ? (
                <SelectYourVibe onSubmit={handleVibeSubmit} />
            ) : (
               
                <Container>
                     <Header /> 
                <Row>
                    <Col xs={12} style={{ padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                        <img
                            src={ChooseVibeImage}
                            alt="Choose Your Vibe"
                            style={{ width: '50%', height: 'auto', borderRadius: '12px', marginBottom: '10px' }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={4} style={{ padding: '12px' }}>
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/playlist/5IzzaghT2XcSRP2tdLaJYe?utm_source=generator"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </Col>
                    <Col xs={12} md={6} lg={4} style={{ padding: '10px' }}>
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/playlist/3rm4bpzAtzJz9i2DGZ9M0S?utm_source=generator"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </Col>
                    <Col xs={12} md={6} lg={4} style={{ padding: '12px' }}>
                    <iframe 
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/playlist/4luqfsi0N6TmWMm105ucFJ?utm_source=generator&theme=0" 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"></iframe>
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
                        <img
                            src={BookReccs}
                            alt="Choose Your Vibe"
                            style={{ width: '100%', height: 'auto', borderRadius: '12px', marginBottom: '10px' }}
                        />
                    </Col>
                </Row>
            </Container>
        
        )}
    </>
);
};

export default ReccVibes;