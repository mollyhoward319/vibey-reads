import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {getAllBooks} from "./api/bookmapping.js";

// const SPOTIFY_CLIENT_ID = "";
// const SPOTIFY_CLIENT_SECRET= "";

export default function App() {
  useEffect(() => {
    async function getBooks() {
      const data = await getAllBooks();
      console.log("----------------", data);
    }
    getBooks()
  }, []);
  return <div>hello world</div>;
}
