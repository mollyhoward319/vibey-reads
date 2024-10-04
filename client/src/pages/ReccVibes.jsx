// this file is the cards that render the recommendations for the user after we get a a response from the backend with Spotify and Google
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SelectYourVibe from './CreateVibes';

function ReccommendedVibes() {

const { music, books } = useParams();

    useEffect(() => {
        console.log("Books:", books);
        console.log("Music:", music);
    }, [books, music]);

    return(
        <Container>
               <Row>
                <Col>
                <h2>Books</h2>
            <ListGroup>
                {books && books.slice(0, 3).map((book, index) => (
                    <ListGroupItem key={index}>
                        <h3>{book.title}</h3>
                        <img src={book.thumbnail} alt={book.title} />
                        <p>{book.description}</p>
                    </ListGroupItem>
                ))}
            </ListGroup>
                    
                </Col>
                <Col>
                    <h2>Playlists</h2>
                <ListGroup>
                {music && music.slice(0, 3).map((playlist, index) => (
                    <ListGroupItem key={index}>
                        <h3>{playlist.name}</h3>
                        <a href={playlist.href} target="_blank" rel="noopener noreferrer"></a>
                    </ListGroupItem>
                ))}
            </ListGroup>
                </Col>
            </Row>
            <h1>ReccVibes Container</h1>
            <Row>
                <Col>
                    <CreateVibes />
                </Col>
            </Row>
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
       

//     return (
//         <>
        
//             {showForm ? (
//                 <SelectYourVibe onSubmit={handleVibeSubmit} />
//             ) : (
//                <div>
//                <Header /> 
      
//                 <Container>
                
//                 <Row>
//                     <Col xs={12} style={{ padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                        
               
//                     </Col>
//                     </Row>
//                     <Row>
//                     <Col xs={12} style={{ padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
//                         <Dropdown>
//                             <Dropdown.Toggle variant="success" id="dropdown-basic">Select Genre</Dropdown.Toggle>
//                             <Dropdown.Menu>
//                                 { playlists.map((playlist, index) => (
//                                     <Dropdown.Item id={playlist.id} key={index}>{playlist.name}</Dropdown.Item>
//                                 ))}
//                             </Dropdown.Menu>
//                         </Dropdown>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col xs={12} md={6} lg={4} style={{ padding: '12px' }}>
                        
//                     </Col>
//                     <Col xs={12} md={6} lg={4} style={{ padding: '10px' }}>
                        
//                     </Col>
//                     <Col xs={12} md={6} lg={4} style={{ padding: '12px' }}>
                
//                     </Col>
//                 </Row>
//                 <Row>
                
//                 </Row>
//                 <Row>
//                     <Col xs={12} style={{ padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                       
//                     </Col>
//                 </Row>
//             </Container>
//             </div>
//         )}
//     </>
// );
// };

// export default ReccVibes;