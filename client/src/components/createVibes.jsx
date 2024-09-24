import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function SelectYourVibe({ onSubmit }) {
    const [selectedVibes, setSelectedVibes] = useState([]);

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setSelectedVibes((prevSelectedVibes) => {
            if (checked) {
                return [...prevSelectedVibes, id];
            } else {
                return prevSelectedVibes.filter((vibe) => vibe !== id);
            }
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(selectedVibes);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="fiction"
                        label="Fiction"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="scienceFiction"
                        label="Science Fiction"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="fantasy"
                        label="Fantasy"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="romance"
                        label="Romance"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="thriller"
                        label="Thriller"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="mystery"
                        label="Mystery"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="horror"
                        label="Horror"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="biographyAndAutobiography"
                        label="Biography and Autobiography"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="historical"
                        label="Historical"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="selfHelp"
                        label="Self Help"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="religion"
                        label="Religion"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="childrensBooks"
                        label="Children's Books"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="youngAdult"
                        label="Young Adult"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="tragedy"
                        label="Tragedy"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="showMatureContent"
                        label="Click to Allow Mature Content"
                        onChange={handleCheckboxChange}
                    />
                </div>
                <Button type="submit"><onSubmit></onSubmit></Button>
            </Form>
        </Container>
    );
}

export default SelectYourVibe;

// the form will have: Book genre, maturity yes/no boolean,
// after it runs the form there will be 3 books and 3 playlists, books and playlist colums.
// The books and playlists will be in two seperate coloums
// each book and each playlist is a card and each card will have a button to save or pass, it will have all the details of each
// There will be a button that says create vibe and the user has to pick one book and one playlist only. When they click on it they will be able to name this vibe and then rerouted back to homepage
// The name of the vibe and the book will show in the colums on home page for reference.
