import React, { useState, useEffect } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import Draggable from 'react-draggable';
import logo from '../assets/VibeyReadsLogo.png';
import '../assets/App.css';
import Header from '../components/Header'; // Import the Header component

const Profile = () => {
    const [musicData, setMusicData] = useState([]);
    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        // Fetch music data from an API or a local source
        const fetchMusicData = async () => {
            try {
                const response = await fetch('https://api.example.com/music'); // Replace with your API endpoint
                const data = await response.json();
                setMusicData(data);
            } catch (error) {
                console.error('Error fetching music data:', error);
            }
        };

        fetchMusicData();
    }, []);

    return (
        <div className="profile">
            <img src={logo} alt="Vibey Reads Logo" className="logo-image"/> {/* Include the image */}
            <Header /> {/* Include the Header component */}
            <h1 style={{ textAlign: 'center' }}>Your Vibes</h1>
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