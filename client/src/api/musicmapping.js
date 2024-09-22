export const getAllmusic = async() => {
    const response = await fetch("/api/Playlist");
    const data = await response.json();
    console.log("______", data);
    return data;
}