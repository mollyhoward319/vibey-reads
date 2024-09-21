// todo: create card for profile
// will have: Name of Vibe, book image, book title(hyperlinked), playlist title(hyperlinked), categories/genres, share button
import {
    Container,
    InputGroup,
    FormControl,
    Button,
    Row,
    Card,
  } from "react-bootstrap";
  import Header from './Components/Header'
  import NavBar from './Components.NavBar'
  import Footer from './Components.Footer'
  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import Home from "./pages/Home";
  import Login from "./pages/login";
  import Signup from "./pages/Signup";
  import NavBar from "./components/NavBar";

  const CLIENT_ID = "";
const CLIENT_SECRET = "";

const SPOTIFY_CLIENT_ID="ec9e9c53cc894eaf82ba5e392c129aab";
const SPOTIFY_SECRET_ID="3e10fefa08ee48719fe9eac4d142ad84";
function App() {
const [searchInput, setSearchInput] = useState("");
const [AccessToken, setAccessToken] = useState("");
const [albums, setAlbums] = useState([]);


useEffect(() => {
//API Access Token
var authParameters= {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'

  },
  
  body: 'grant_type=client_credentials&client_id=' + SPOTIFY_CLIENT_ID + '&client_secret=' + SPOTIFY_SECRET_ID
}
console.log("grant_type=client_credentials&client_id=" + SPOTIFY_CLIENT_ID + "&client_secret=" + SPOTIFY_SECRET_ID);
fetch('https://accounts.spotify.com/api/token', authParameters)
.then(result => result.json())
.then(data => setAccessToken(data.access_token))
}, [])

//Search 
async function search() {
 console.log("Search for " + searchInput); //Taylor Swift

//Get request using search to get the Artists ID
var searchParameters = {
  method: 'GET',
  headers: {
    'Content-Type': "application/json",
    'Authorization': 'Bearer ' + AccessToken
  }
}
var artistID = await fetch ('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
.then(response => response.json)
.then(data => {return data.artists.items[0],id})

console.log ("Artist ID is " +artistID);

//Get request with Artist ID to grab all the albums from that artist
var returnedAlbums = await fetch ('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50')
.then(response => response.json())
.then(data => {
  console.log(data);
  setAlbums(data.items);
});
//Display  those albums to the user
console.log(albums);
}
return (
    <div className="App">
      <Container>
        <InputGroup className="mb-3" size="lg">
const [searchInput, setSearchInput] = useState("");
useEffect(() => {}, []);
return (
  <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    <Container>
      <InputGroup className="mb-3" size="lg">
        <FormControl
          placeholder="Search for Artist"
          type="input"
          onKeyPress={(event) => {
            if (event.key == "Enter") {
              search();
            }
          }}
          onChange={event => setSearchInput(event.target.value)}
/>
<Button onClick={search}>
Search
</Button>
</InputGroup>
</Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          {albums.map( (album, i) => {
            console.log(album);
            return(
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <Button
          onClick={() => {
            console.log("Clicked Button");
          }}
        >
          Search
        </Button>
      </InputGroup>
    </Container>
    <Container>
      <Row className="mx-2 row-cols-4">
        <Card>
          <Card.Img src={album.images[0].url} />
          <Card.Body>
            <Card.Title>{album.name}</Card.Title>
          </Card.Body>
        </Card>
          )
        })}
        </Row>
        </Container>
      </div>
      </Row>
    </Container>
  </div>
);
}


export default App;