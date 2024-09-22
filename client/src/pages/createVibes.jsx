// todo: form for creating vibes, nav bar, and footer
import "./src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Container,
    InputGroup,
    FormControl,
    Button,
    Row,
    Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

function selectYourVibe() {
    return (
        <Container>
            <Form>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="fiction"
                        label="Fiction"
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="scienceFiction"
                        label="Science Fiction"
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="fantasy"
                        label="Fantasy"
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="romance"
                        label="Romance"
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="thriller"
                        label="Thriller"
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="mystery"
                        label="Mystery"
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="horror"
                        label="Horror"
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="biographyAndAutobiography"
                        label="Biography and Autobiography"
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="historical"
                        label="Historical"
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="selfHelp"
                        label="Self Help"
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="religion"
                        label="Religion"
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="childrensBooks"
                        label="Children's Books"
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="youngAdult"
                        label="Young Adult"
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="tragedy"
                        label="Tragedy"
                    />
                </div>
                <div className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="showMatureContent"
                        label="Click to Allow Mature Content"
                    />
                </div>
            </Form>
        </Container>
    );
}

export default selectYourVibe;

// the form will have: Book genre, maturity yes/no boolean,
// after it runs the form there will be 3 books and 3 playlists, books and playlist colums.
// The books and playlists will be in two seperate coloums
// each book and each playlist is a card and each card will have a button to save or pass, it will have all the details of each
// There will be a button that says create vibe and the user has to pick one book and one playlist only. When they click on it they will be able to name this vibe and then rerouted back to homepage
// The name of the vibe and the book will show in the colums on home page for reference.
