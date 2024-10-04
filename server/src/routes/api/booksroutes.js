import { Router } from "express";
import fetch from "node-fetch";
import { mapGoogleBooksData } from "../../utils/dataMapping.js"; // Adjusted import path

const router = Router();

router.get("/health", (req, res) => {
  res.status(200).send("Hello from the API Route");
});

router.get("/:subjects", async (req, res) => {
  try {
    const subjects = req.params.subjects;
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject+[${subjects}]&key=${process.env.GOOGLE_KEY}`
    );
    const data = await response.json();
    const mappedData = mapGoogleBooksData(data); // Use the mapping function
    res.send(mappedData);
  } catch (error) {
    console.error("Error fetching data from Google Books API:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch data from Google Books API" });
  }
});

export { router as bookRouter };