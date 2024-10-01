import React, { useState, useEffect } from 'react';
import SelectYourVibe from "../components/createVibes"; // this imports the form for selecting your vibes
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Dropdown } from 'react-bootstrap';
import Header from '../components/Header';

function ReccVibes() {
    const [showForm, setShowForm] = useState(false);
    const [playlists, setPlaylists] = useState([]);

    // Fetch playlist data if we aren't showing the form
    useEffect(() => {
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