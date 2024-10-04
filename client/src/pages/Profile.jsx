import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Draggable from 'react-draggable';
import '../assets/App.css';
import Header from '../components/Header';


const Profile = () => {

    // Im making the API calls in the client/api/callingVibes.js file. Do not make fetch calls to the back end here. 
    
    return (
        <div className="profile">
            <Header /> 
            <Container>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Col xs={12} md={6} lg={4} style={{ padding: '12px', textAlign: 'center' }}>
                        
                    </Col>
                    <Col xs={12} md={6} lg={4} style={{ padding: '12px' }}>
                      
                    </Col>
                </Row>
            </Container>
            
     
            <Container>
                <Row>
                    {musicData.map((music) => (
                        <Draggable key={music.id}>
                            <Card style={{ width: '18rem', margin: '10px' }}>
                                <Card.Img variant="top" src={music.images[0]?.url} />
                                <Card.Body>
                                    <Card.Title>{music.name}</Card.Title>
                                    <Card.Text>{music.artists.map(artist => artist.name).join(', ')}</Card.Text>
                                    <Card.Link href={music.external_urls.spotify}>Listen</Card.Link>
                                </Card.Body>
                            </Card>
                        </Draggable>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Profile;

