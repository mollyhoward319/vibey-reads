export const getAllBooks = async() => {
    const response = await fetch("/api/books/romance");
    const data = await response.json();
    console.log("______", data);
    return data;
}

